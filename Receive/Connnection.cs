using System;
using System.Collections.Generic;
using System.Text;
using UriReduction.Data.DataBaseConnectionConfig;

namespace Receive
{
    public class Connnection: IDataBaseConnectionConfiguration

    {
        public string GetConnectionString()
        {
            return
                "Data Source=urireductionapi20180326023138dbserver.database.windows.net;Initial Catalog=UriReductionAPI20180326024047_db;Integrated Security=False;User ID=grisha;Password=ReTyFg159;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        }
    }
}
