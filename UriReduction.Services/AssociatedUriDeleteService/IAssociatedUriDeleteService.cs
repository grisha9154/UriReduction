using System.Threading.Tasks;

namespace UriReduction.Services.AssociatedUriDeleteService
{
    public interface IAssociatedUriDeleteService
    {
        Task<bool> DeleteUri(string shortUri, string userName);
    }
}
