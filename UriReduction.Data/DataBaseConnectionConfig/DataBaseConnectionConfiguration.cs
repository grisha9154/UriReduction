using Microsoft.Extensions.Configuration;

namespace UriReduction.Data.DataBaseConnectionConfig
{
    public class MsSqlConnectionConfiguration:IDataBaseConnectionConfiguration
     {
        
        private readonly string _connectionString;

         public MsSqlConnectionConfiguration(IConfiguration configuration)
         {
             _connectionString = configuration["DataBaseConncetion"];
         }
        public string GetConnectionString()
        {
            return _connectionString;
        }
     }
}
