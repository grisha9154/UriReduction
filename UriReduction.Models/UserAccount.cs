using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace UriReduction.Models
{
    public class UserAccount
    {
        public UserAccount()
        {
            UserRoles = new List<string>();
        }
        public int? Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public List<string> UserRoles { get; set; }

    }
}
