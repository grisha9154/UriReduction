using Microsoft.AspNetCore.Mvc;

namespace UriReduction.API.Controllers
{
    [Route("SUGC")]
    public class ImageLoaderController: Controller
    {
        [HttpPost]
        [Route("image")]
        public string Post()
        {
            return "qwe";
        }
    }
}
