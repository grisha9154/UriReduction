using Microsoft.AspNetCore.Identity;

namespace UriReduction.Models
{
    public class UserAccount
    {
        public int? Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
