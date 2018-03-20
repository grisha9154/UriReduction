using System;
using System.Collections.Generic;
using System.Text;
using UriReduction.Models;

namespace UriReduction.Data.UserRepositories
{
    public interface IUserRoleRepository:IRepository<UserRoleModel>
    {
        List<int> GetAllUserIdByRoleId(int roleId);
        List<int> GetAllRoleIdByUserId(int roleId);
    }
}
