namespace UriReduction.Data.DataBaseConnectionConfig
{
    public class MsSqlConnectionConfiguration:IDataBaseConnectionConfiguration
     {
        private const string ConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=UriReduction.DataBase;Integrated Security=True;";

        public string GetConnectionString()
        {
            return ConnectionString;
        }
     }
}
