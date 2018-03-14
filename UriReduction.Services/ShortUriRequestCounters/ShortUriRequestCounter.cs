using UriReduction.Data;
using UriReduction.Models;

namespace UriReduction.Services.ShortUriRequestCounters
{
    public class ShortUriRequestCounter: IShortUriRequestCounter
    {
        private readonly IAssociatedUriRepository _repository;

        public ShortUriRequestCounter(IAssociatedUriRepository repository)
        {
            _repository = repository;
        }

        public int IncrementShortUriRequestCount(string shortUri)
        {
            AssociatedUri uri = _repository.GetElementByShortUri(shortUri);
            _repository.UpdateElementRequestFieldById(uri.RequestCount+1,uri.Id);
            uri = _repository.GetElementById(uri.Id);
            return uri.RequestCount;
        }
    }
}
