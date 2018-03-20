using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Data.UserRepositories;
using UriReduction.Models;

namespace UriReduction.Services.AssociatedUriDeleteService
{
    public class AssociatedUriDeleteService:IAssociatedUriDeleteService
    {
        private IAssociatedUriRepository _uriRepository;
        private IUserRepository _userRepository;

        public AssociatedUriDeleteService(IAssociatedUriRepository uriRepository, IUserRepository userRepository)
        {
            _uriRepository = uriRepository;
            _userRepository = userRepository;
        }

        public async Task<bool> DeleteUri(string shortUri, string userName)
        {
            int? result = null;
            if (await IsUriBelowUser(shortUri, userName))
            {
                result = _uriRepository.DeleteElement(shortUri);
            }

            return result != null;
        }

        public async Task<bool> IsUriBelowUser(string shortUri, string userName)
        {
            var uri = _uriRepository.GetElementByShortUri(shortUri);
            var user = await ((IUserStore<UserAccount>)_userRepository).FindByNameAsync(userName,new CancellationToken());
            return uri.UserId == user.Id;
        }
    }
}
