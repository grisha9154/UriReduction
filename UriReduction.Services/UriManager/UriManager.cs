using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using UriReduction.Data.UserRepositories;

namespace UriReduction.Services.UriManager
{
    public class UriManager:IUriManager
    {
        private readonly UserManager<UserRepository> _manager;

        public UriManager(UserManager<UserRepository> manager)
        {
            _manager = manager;
        }

        public async Task GetShortUriByLongUri(string longUri,string userName)
        {
            var user = await _manager.FindByNameAsync(userName);
            
        }
    }
}
