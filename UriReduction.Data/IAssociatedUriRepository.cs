using UriReduction.Models;

namespace UriReduction.Data
{
        public interface IAssociatedUriRepository: IRepository<AssociatedUri>
    {
        AssociatedUri GetElementByShortUri(string shortUri);
        AssociatedUri GetElementByLongUri(string longUri);
    }
}
