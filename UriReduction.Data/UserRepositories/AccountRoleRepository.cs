using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Dapper;
using Microsoft.AspNetCore.Identity;
using UriReduction.Data.DataBaseConnectionConfig;
using UriReduction.Models;

namespace UriReduction.Data.UserRepositories
{
    public class AccountRoleRepository: IRoleStore<AccountRole>
    {
        private readonly IDataBaseConnectionConfiguration _configuration;

        public AccountRoleRepository(IDataBaseConnectionConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void Dispose()
        {
        }

        public async Task<IdentityResult> CreateAsync(AccountRole role, CancellationToken cancellationToken)
        {
            int rows;
            using (IDbConnection db = new SqlConnection(_configuration.GetConnectionString()))
            {
                var sqlQuery = "INSERT INTO [UriReduction].[Role](Name) VALUES(@Name);";
                rows = await db.ExecuteAsync(sqlQuery, role);
            }

            if (rows > 0)
            {
                return IdentityResult.Success;
            }

            return IdentityResult.Failed();
        }

        public Task<IdentityResult> UpdateAsync(AccountRole role, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> DeleteAsync(AccountRole role, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetRoleIdAsync(AccountRole role, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task<string> GetRoleNameAsync(AccountRole role, CancellationToken cancellationToken)
        {
            return role.Name;
        }

        public Task SetRoleNameAsync(AccountRole role, string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<string> GetNormalizedRoleNameAsync(AccountRole role, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public async Task SetNormalizedRoleNameAsync(AccountRole role, string normalizedName, CancellationToken cancellationToken)
        {
            return;
        }

        public async Task<AccountRole> FindByIdAsync(string roleId, CancellationToken cancellationToken)
        {
            AccountRole role;
            using (IDbConnection db = new SqlConnection(_configuration.GetConnectionString()))
            {
                var sqlQuery = "select * from [UriReduction].[Role] where Id = @roleId;";
                role = await db.QuerySingleOrDefaultAsync<AccountRole>(sqlQuery, new { roleId = roleId });
            }
            return role;
        }

        public async Task<AccountRole> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            AccountRole role;
            using (IDbConnection db = new SqlConnection(_configuration.GetConnectionString()))
            {
                var sqlQuery = "select * from [UriReduction].[Role] where Name = @name;";
                role = await db.QuerySingleOrDefaultAsync<AccountRole>(sqlQuery, new { name = normalizedRoleName });
            }
            return role;
        }
    }
}
