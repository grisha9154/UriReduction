using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Data.UserRepositories;
using UriReduction.Models;

namespace UriReduction.API.Controllers
{
    [Produces("application/json")]
    [Route("signin")]
    public class AccountSignInController : Controller
    {
        private readonly UserManager<UserAccount> _userManager;
        private readonly SignInManager<UserAccount> _signInManager;
        public AccountSignInController( SignInManager<UserAccount> signInManager, UserManager<UserAccount> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post([FromBody]RegistrationModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(new UserAccount{UserName = model.Login}, model.Password, false,false);
            if (!result.Succeeded) return Unauthorized();
            await _signInManager.SignInAsync(await _userManager.FindByNameAsync(model.Login), false);
            return Ok(Json(model.Login));
        }
    }
}