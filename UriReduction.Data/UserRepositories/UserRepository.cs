using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Identity;
using UriReduction.Data.DataBaseConnectionConfig;
using UriReduction.Models;

namespace UriReduction.Data.UserRepositories
{
    public class UserRepository: IUserRepository
    {
        private readonly IDataBaseConnectionConfiguration _connectionString;
        private readonly IRoleStore<AccountRole> _roleStore;
        private readonly IUserRoleRepository _userRoleRepository;

        public UserRepository(IDataBaseConnectionConfiguration connectionString, IRoleStore<AccountRole> roleStore, IUserRoleRepository userRoleRepository)
        {
            _connectionString = connectionString;
            _roleStore = roleStore;
            _userRoleRepository = userRoleRepository;
        }

        public void Dispose()
        {
        }

        public async Task<string> GetUserIdAsync(UserAccount user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if(user==null) throw new ArgumentNullException(nameof(user));
            return user.Id.ToString();
        }

        public async Task<string> GetUserNameAsync(UserAccount user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user == null) throw new ArgumentNullException(nameof(user));
            return user.UserName;
        }

        public Task SetUserNameAsync(UserAccount user, string userName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetNormalizedUserNameAsync(UserAccount user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task SetNormalizedUserNameAsync(UserAccount user, string normalizedName, CancellationToken cancellationToken)
        {
           
        }

        public async Task<IdentityResult> CreateAsync(UserAccount user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user == null) throw new ArgumentNullException(nameof(user));
            int rows;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "INSERT INTO [UriReduction].[User](UserName, Password) VALUES(@UserName,@Password);";
                 rows = await db.ExecuteAsync(sqlQuery, user);
            }

            if (rows > 0)
            {
                return IdentityResult.Success;
            }

            return IdentityResult.Failed();
        }

        public async Task<IdentityResult> UpdateAsync(UserAccount user, CancellationToken cancellationToken)
        {
            int rows;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "UPDATE [UriReduction].[User] set UserName = @UserName, [Password] = @Password where [Id]=@Id;";
                rows =await db.ExecuteAsync(sqlQuery, user);
            }

            if (rows > 0)
            {
                return IdentityResult.Success;
            }

            return IdentityResult.Failed();
        }

        public Task<IdentityResult> DeleteAsync(UserAccount user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<UserAccount> FindByIdAsync(string userId, CancellationToken cancellationToken)
        {
            UserAccount user;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "SELECT * FROM [UriReduction].[User] where Id=@userId";
                user = await db.QuerySingleOrDefaultAsync<UserAccount>(sqlQuery, new { userId });
            }
            return user;
        }

        public async Task<UserAccount> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken)
        {
            UserAccount user;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                const string sqlQuery = "SELECT * FROM [UriReduction].[User] where UserName=@userName";
                user = await db.QuerySingleOrDefaultAsync<UserAccount>(sqlQuery,new {userName=normalizedUserName} );
                if (user == null) return null;
                if (user.Id == null) return user;
                var userRoles = _userRoleRepository.GetAllRoleIdByUserId(user.Id.Value);
                foreach (var userRole in userRoles)
                {
                    user.UserRoles.Add(
                        (await _roleStore.FindByIdAsync(userRole.ToString(), new CancellationToken())).Name);
                }
            }
            return user;
        }

        public async Task SetPasswordHashAsync(UserAccount user, string passwordHash, CancellationToken cancellationToken)
        {
            user.Password = passwordHash;
        }

        public async Task<string> GetPasswordHashAsync(UserAccount user, CancellationToken cancellationToken)
        {
            string passwordHash;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "SELECT Password from [UriReduction].[User] where UserName=@UserName";
                passwordHash = db.QuerySingleOrDefault<string>(sqlQuery,user);
            }

            return passwordHash;
        }

        public async Task<bool> HasPasswordAsync(UserAccount user, CancellationToken cancellationToken)
        {
            return true;
        }

        public async Task AddToRoleAsync(UserAccount user, string roleName, CancellationToken cancellationToken)
        {
            var role = await _roleStore.FindByNameAsync(roleName,new CancellationToken());
            _userRoleRepository.CreatNewElement(new UserRoleModel{RoleId = role.Id,UserId = user.Id.Value});
            user.UserRoles.Add(roleName);
        }
        
        public Task RemoveFromRoleAsync(UserAccount user, string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<IList<string>> GetRolesAsync(UserAccount user, CancellationToken cancellationToken)
        {
            return user.UserRoles;
        }

        public async Task<bool> IsInRoleAsync(UserAccount user, string roleName, CancellationToken cancellationToken)
        {
           var userRole = user.UserRoles.Find((role) => role.Equals(roleName));
           return userRole != null;
        }

        public async Task<IList<UserAccount>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken)
        {
           var role = await _roleStore.FindByNameAsync(roleName, new CancellationToken());
           var users = _userRoleRepository.GetAllUserIdByRoleId(role.Id);
            List<UserAccount> result = new List<UserAccount>();
            foreach (var user in users)
            {
                result.Add(await FindByIdAsync(user.ToString(), new CancellationToken()));
            }

            return result;
        }
    }
}
