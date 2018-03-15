using UriReduction.Data;
using UriReduction.Data.AssociatedUriRepositories;

namespace UriReduction.Services.ShortUriDecoders
{
    public class ShortUriDecoder : IShortUriDecoder
    {
        private readonly IAssociatedUriRepository _repository;

        public ShortUriDecoder(IAssociatedUriRepository repository)
        {
            _repository = repository;
        }
        public string DecipherShortUri(string shortUri)
        {
            var longUri = ReturnLongUriByShortUri(shortUri);
            return longUri ?? ("http://localhost:63303/SUGC");
        }

        private string ReturnLongUriByShortUri(string shortUri)
        {
            var associatedUri = _repository.GetElementByShortUri(shortUri);
            return associatedUri.LongUri;
        }
    }
}
