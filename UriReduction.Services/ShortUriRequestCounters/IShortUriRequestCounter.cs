using System;
using System.Collections.Generic;
using System.Text;

namespace UriReduction.Services.ShortUriRequestCounters
{
    public interface  IShortUriRequestCounter
    {
        int IncrementShortUriRequestCount(string shortUri);
    }
}
