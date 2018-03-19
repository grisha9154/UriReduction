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
                "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=UriReduction.DataBase;Integrated Security=True;";
        }
    }
}
