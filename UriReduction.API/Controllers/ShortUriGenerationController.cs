using System.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Models;
using UriReduction.Services.UriShorteners;

namespace UriReduction.API.Controllers
{
    
    [Route("SUGC")]
    public class ShortUriGenerationController : Controller
    {
        private readonly IUriShortener _shortener;
        private readonly UserManager<UserAccount> _userManager;
        public ShortUriGenerationController(IUriShortener shortener, UserManager<UserAccount> userManager)
        {
            _shortener = shortener;
            _userManager = userManager;
        }
      
        [HttpGet]
        [AllowAnonymous]
        public IActionResult Get()
        {
            return View("~/wwwroot/index.html");
        }
        [HttpPost]
        public string Post( [Microsoft.AspNetCore.Mvc.FromBody]AssociatedUri longUri)
        {
            var shortUri = _shortener.Shorten(longUri.LongUri);

            return "SUGC/"+ shortUri;
        }
    }
}