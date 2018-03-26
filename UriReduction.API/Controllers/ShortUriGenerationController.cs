using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Models;
using UriReduction.Services.UriShorteners;

namespace UriReduction.API.Controllers
{
    
   
    public class ShortUriGenerationController : Controller
    {
        private readonly IUriShortener _shortener;
        private readonly UserManager<UserAccount> _userManager;
        public ShortUriGenerationController(IUriShortener shortener, UserManager<UserAccount> userManager)
        {
            _shortener = shortener;
            _userManager = userManager;
        }
        [Route("signin")]
        [Route("signup")]
        [Route("SUGC")]
        [Route("user")]
        [HttpGet]
        [AllowAnonymous]
        public IActionResult Get()
        {
            return View("~/wwwroot/index.html");
        }
        [Route("SUGC")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<string> Post( [FromBody]AssociatedUri longUri)
        {
            UserAccount user = new UserAccount{Id = null};
            if (User.Identity.Name != null)
            {
                user = await _userManager.FindByNameAsync(User.Identity.Name);
            }
            var shortUri = _shortener.Shorten(longUri.LongUri,user.Id);
            return Request.Host+"/SUGC/" + shortUri;
        }
    }
}