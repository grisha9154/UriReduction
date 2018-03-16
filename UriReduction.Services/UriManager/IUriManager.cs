using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace UriReduction.Services.UriManager
{
    public interface IUriManager
    {
        Task GetShortUriByLongUri(string longUri, string userName);
    }
}
