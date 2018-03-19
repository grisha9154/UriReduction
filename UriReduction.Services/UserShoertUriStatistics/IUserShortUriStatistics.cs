using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using UriReduction.Models;

namespace UriReduction.Services.UserShoertUriStatistics
{
    public interface IUserShortUriStatistics
    {
        List<AssociatedUri> GetStatistics(string userName);
    }
}
