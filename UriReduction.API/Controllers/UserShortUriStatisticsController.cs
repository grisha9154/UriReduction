using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Services.UserShoertUriStatistics;

namespace UriReduction.API.Controllers
{
    [Produces("application/json")]
    [Route("statistic")]
    public class UserShortUriStatisticsController : Controller
    {
        private readonly IUserShortUriStatistics _statistics;

        public UserShortUriStatisticsController(IUserShortUriStatistics statistics)
        {
          _statistics = statistics;
        }

        [HttpGet]
        [Authorize]
        public JsonResult Get()
        {
            var result = _statistics.GetStatistics(User.Identity.Name).ToArray();
            foreach (var uri in result)
            {
                uri.ShortUri = Request.Scheme + "://" + Request.Host + "/SUGC/" + uri.ShortUri;
            }
            return Json(result);
        }
    }
}