using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Models;
using UriReduction.Services.ShortUriDecoders;
using UriReduction.Services.ShortUriRequestCounters;

namespace UriReduction.API.Controllers
{

    [Route("SUGC")]
    public class ShortUriRedirectionController : Controller
    {
        private readonly IShortUriDecoder _rederection;
        private readonly IShortUriRequestCounter _counter;
        public ShortUriRedirectionController(IShortUriDecoder rederection, IShortUriRequestCounter counter)
        {
            _rederection = rederection;
            _counter = counter;
        }
        [HttpGet]
        [Route("{shortUri}")]
        [AllowAnonymous]
        public IActionResult Get(string shortUri)
        {
            var longUri= Redirect(_rederection.DecipherShortUri(shortUri));
           // _counter.IncrementShortUriRequestCount(shortUri);
            return longUri;
        }
    }
}