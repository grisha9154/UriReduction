using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UriReduction.API.Controllers
{
    [Produces("application/json")]

    public class ConfirmLoginInController : Controller
    {
        [Route("confirmloginin")]
        [HttpGet]
        [AllowAnonymous]
        public IActionResult Get()
        {
            bool loginIn = User.Identity.IsAuthenticated;

            return Ok(new { UserName = User.Identity.Name, loginIn });
        }
    }
}