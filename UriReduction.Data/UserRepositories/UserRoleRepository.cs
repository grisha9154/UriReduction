using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using Dapper;
using UriReduction.Data.DataBaseConnectionConfig;
using UriReduction.Models;

namespace UriReduction.Data.UserRepositories
{
    public class UserRoleRepository:IUserRoleRepository
    {
        private readonly IDataBaseConnectionConfiguration _configuration;

        public UserRoleRepository(IDataBaseConnectionConfiguration configuration)
        {
            _configuration = configuration;
        }

        public List<UserRoleModel> GetAllElemnt()
        {
            throw new NotImplementedException();
        }

        public UserRoleModel GetElementById(int id)
        {
            throw new NotImplementedException();
        }

        public int CreatNewElement(UserRoleModel element)
        {
            int rows;
            using (IDbConnection db = new SqlConnection(_configuration.GetConnectionString()))
            {
                var sqlQuery = "INSERT INTO [UriReduction].[UserRole](UserId,RoleId) VALUES(@UserId,@RoleId);";
                rows = db.Execute(sqlQuery, element);
            }
            return rows;
        }

        public int DeleteElement(int id)
        {
            throw new NotImplementedException();
        }

        public List<int> GetAllUserIdByRoleId(int roleId)
        {
            List<int> users;
            using (IDbConnection db = new SqlConnection(_configuration.GetConnectionString()))
            {
                var sqlQuery = "SELECT UserId FROM [UriReduction].[UserRole] where RoleId = @roleId";
                users = db.Query<int>(sqlQuery, roleId).ToList();
            }

            return users;
        }

        public List<int> GetAllRoleIdByUserId(int userId)
        {
            List<int> roles;
            using (IDbConnection db = new SqlConnection(_configuration.GetConnectionString()))
            {
                var sqlQuery = "SELECT RoleId FROM [UriReduction].[UserRole] where UserId = @userId";
                roles = db.Query<int>(sqlQuery,new {userId}).ToList();
            }

            return roles;
        }
    }
}
