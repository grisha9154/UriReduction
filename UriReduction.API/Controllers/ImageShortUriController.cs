using Microsoft.AspNetCore.Mvc;

namespace UriReduction.API.Controllers
{
    [Route("SUGC")]
    public class ImageShortUriController: Controller
    {
        [HttpPost]
        [Route("image")]
        public string Post()
        {
            return "qwe";
        }
    }
}
