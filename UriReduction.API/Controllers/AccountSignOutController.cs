using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Models;

namespace UriReduction.API.Controllers
{
    [Produces("application/json")]
    [Route("signout")]
    public class AccountSignOutController : Controller
    {

        private readonly SignInManager<UserAccount> _signInManager;

        public AccountSignOutController(SignInManager<UserAccount> signInManager)
        {
            _signInManager = signInManager;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }
    }
}