using Microsoft.AspNetCore.Mvc;
using UriReduction.Services.ShortUriDecoders;

namespace UriReduction.API.Controllers
{

    [Route("SUGC")]
    public class ShortUriRedirectionController : Controller
    {
        private readonly IShortUriDecoder _rederection;
        public ShortUriRedirectionController(IShortUriDecoder rederection)
        {
            _rederection = rederection;
        }
        [HttpGet]
        [Route("{shortUri}")]
        public IActionResult Get(string shortUri)
        {
            return Redirect(_rederection.DecipherShortUri(shortUri));
        }
    }
}