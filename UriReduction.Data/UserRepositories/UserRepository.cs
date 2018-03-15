using System;
using System.Data;
using System.Data.SqlClient;
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

        public UserRepository(IDataBaseConnectionConfiguration connectionString)
        {
            _connectionString = connectionString;
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

        public  Task SetUserNameAsync(UserAccount user, string userName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public  Task<string> GetNormalizedUserNameAsync(UserAccount user, CancellationToken cancellationToken)
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

        public Task<IdentityResult> UpdateAsync(UserAccount user, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
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
                var sqlQuery = "SELECT * FROM [UriReduction].[User] where UserName=@userName";
                user = await db.QuerySingleOrDefaultAsync<UserAccount>(sqlQuery,new {userName=normalizedUserName} );
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
    }
}
