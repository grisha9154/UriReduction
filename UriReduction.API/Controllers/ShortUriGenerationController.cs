using Microsoft.AspNetCore.Mvc;
using UriReduction.Services.UriShorteners;

namespace UriReduction.API.Controllers
{
    [Route("SUGC")]
    public class ShortUriGenerationController : Controller
    {
        private readonly IUriShortener _shortener;
        public ShortUriGenerationController(IUriShortener shortener)
        {
            _shortener = shortener;
        }

        [HttpGet]
        public string Get()
        {
            return "eee boy";
        }
        [HttpPost]
        public string Post(string longUri)
        {
            return "SUGC/"+_shortener.Shorten(longUri);
        }
    }
}
