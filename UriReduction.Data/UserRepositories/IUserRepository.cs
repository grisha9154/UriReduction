using Microsoft.AspNetCore.Identity;
using UriReduction.Models;

namespace UriReduction.Data.UserRepositories
{
    public interface IUserRepository: IUserStore<UserAccount>, IUserPasswordStore<UserAccount>, IUserRoleStore<UserAccount>
    {
    }
}
