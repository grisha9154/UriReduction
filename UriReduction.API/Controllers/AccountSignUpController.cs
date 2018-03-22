using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Models;

namespace UriReduction.API.Controllers
{
    [Produces("application/json")]
    [Route("signup")]
    public class AccountSignUpController : Controller
    {
        private readonly UserManager<UserAccount> _userManager;
        private readonly SignInManager<UserAccount> _signInManager;

        public AccountSignUpController(SignInManager<UserAccount> signInManager, UserManager<UserAccount> userManager, RoleManager<AccountRole> roleManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Post([FromBody]RegistrationModel model)
        {
            var result =  await _userManager.CreateAsync(new UserAccount{UserName = model.Login},model.Password);
            if (!result.Succeeded) return Unauthorized();
            await _userManager.AddToRoleAsync(await _userManager.FindByNameAsync(model.Login), "User");
            await _signInManager.SignInAsync(new UserAccount { UserName = model.Login}, false);
            return Ok(Json(model.Login));
        }
    }
}