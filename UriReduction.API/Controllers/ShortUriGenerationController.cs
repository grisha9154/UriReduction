using Microsoft.AspNetCore.Mvc;
using UriReduction.Models;
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
        public IActionResult Get()
        {
            return View("~/wwwroot/index.html");
        }
        [HttpPost]
        public string Post( [FromBody]AssociatedUri longUri)
        {
            return "SUGC/"+_shortener.Shorten(longUri.LongUri);
        }
    }
}