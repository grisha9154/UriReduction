using System.Collections.Generic;
using UriReduction.Models;

namespace UriReduction.Data.AssociatedUriRepositories
{
        public interface IAssociatedUriRepository: IRepository<AssociatedUri>
    {
        AssociatedUri GetElementByShortUri(string shortUri);
        AssociatedUri GetElementByLongUri(string longUri);
        int UpdateElementRequestFieldById(int newRequest, int id);
        List<AssociatedUri> GetAllElementByUserName(string userName);
        int DeleteElement(string shortUri);
    }
}
