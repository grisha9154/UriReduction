using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Models;
using UriReduction.Services.AssociatedUriDeleteService;

namespace UriReduction.API.Controllers
{
    [Produces("application/json")]
    [Route("deleteuri")]
    public class ShortUriDeletedController : Controller
    {
        private readonly IAssociatedUriDeleteService _deleteService;

        public ShortUriDeletedController(IAssociatedUriDeleteService deleteService)
        {
            _deleteService = deleteService;
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody]AssociatedUri uri)
        {
            var result = await  _deleteService.DeleteUri(uri.ShortUri, User.Identity.Name);
            return result ? (IActionResult) Ok() : NotFound();
        }
    }
}