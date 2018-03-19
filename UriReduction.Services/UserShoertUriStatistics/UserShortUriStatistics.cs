using System.Collections.Generic;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Models;

namespace UriReduction.Services.UserShoertUriStatistics
{
    public class UserShortUriStatistics: IUserShortUriStatistics
    {
        private readonly IAssociatedUriRepository _repository;

        public UserShortUriStatistics(IAssociatedUriRepository repository)
        {
            _repository = repository;
        }

        public List<AssociatedUri> GetStatistics(string userName)
        {
            return _repository.GetAllElementByUserName(userName);
        }
    }
}
