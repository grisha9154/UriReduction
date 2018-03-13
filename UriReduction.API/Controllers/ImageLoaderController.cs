using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UriReduction.API.Controllers
{
    [Route("SUGC")]
    public class ImageLoaderController: Controller
    {
        [HttpPost]
        [Route("/image")]
        public async Task<string> Post(IFormFile file)
        {
            var filePath = Path.GetTempFileName();
            if(file.Length > 0)
            {
                using (var stream = new FileStream("D:\\test.jpeg", FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }

            return "{}";
        }
    }
}
