using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Services.ImageUpload;
using UriReduction.Services.UriShorteners;

namespace UriReduction.API.Controllers
{
    [Route("SUGC")]
    public class ImageLoaderController: Controller
    {
        private readonly IImageUploader _uploader;
        private readonly IUriShortener _shortener;
        public ImageLoaderController( IImageUploader uploader, IUriShortener shortener)
        {
            _uploader = uploader;
            _shortener = shortener;
        }
        [HttpPost]
        [Route("/image")]
        public string Post(IFormFile file)
        {
            var longUri = _uploader.UploadImage(file);
            var shortUri = _shortener.Shorten(longUri);
            return "{" +
                   "\"shortUri\":" + "\"SUGC/" + $"{shortUri}\""+
                   "}";
        }
    }

}
