using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Primitives;
using UriReduction.Data.UserRepositories;
using UriReduction.Models;
using UriReduction.Services.ImageUpload;
using UriReduction.Services.UriShorteners;

namespace UriReduction.API.Controllers
{
    [Route("SUGC")]
    public class ImageLoaderController: Controller
    {
        private readonly IImageUploader _uploader;
        private readonly IUriShortener _shortener;
        private readonly UserManager<UserAccount> _userManager;
        public ImageLoaderController( IImageUploader uploader, IUriShortener shortener, UserManager<UserAccount> userManager)
        {
            _uploader = uploader;
            _shortener = shortener;
            _userManager = userManager;
        }
        [HttpPost]
        [Route("/image")]
        [AllowAnonymous]
        public async Task<JsonResult> Post(IFormFile file)
        {
            var longUri = _uploader.UploadImage(file);
            UserAccount user = new UserAccount { Id = null };
            if (User.Identity.Name != null)
            {
                user = await _userManager.FindByNameAsync(User.Identity.Name);
            }
            var shortUri = Request.Host+"/SUGC/"+ _shortener.Shorten(longUri, user.Id);
            return Json(new {shortUri, fullSet=true});
        }
    }

}
