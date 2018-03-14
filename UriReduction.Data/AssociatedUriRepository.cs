using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using UriReduction.Data.DataBaseConnectionConfig;
using UriReduction.Models;

namespace UriReduction.Data
{
    public class AssociatedUriRepository: IAssociatedUriRepository
    {
        private readonly IDataBaseConnectionConfiguration _connectionString;
        public AssociatedUriRepository(IDataBaseConnectionConfiguration connectionConfiguration)
        {
          _connectionString = connectionConfiguration;
        }
        public AssociatedUri GetElementById(int id)
        {
            List<AssociatedUri> uri;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                uri = db.Query<AssociatedUri>("SELECT * FROM [UriReduction].[AssociatedUri] where id = @id ", new {id}).ToList();
            }
            return CheckListOfUri(uri);
        }
        public List<AssociatedUri> GetAllElemnt()
        {
            List<AssociatedUri> uris;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                uris = db.Query<AssociatedUri>("SELECT * FROM [UriReduction].[AssociatedUri]").ToList();
            }
            return uris;
        }
        public AssociatedUri GetElementByShortUri(string shortUri)
        {
            List<AssociatedUri> uri;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQueiry = "SELECT * FROM [UriReduction].[AssociatedUri] where ShortUri=@shortUri;";
                uri = db.Query<AssociatedUri>(sqlQueiry, new { shortUri }).ToList();
            }

            return CheckListOfUri(uri);
        }
        private AssociatedUri CheckListOfUri(List<AssociatedUri> list)
        {
            if (list.Count > 0)
            {
                return list.First();
            }
            else
            {
                return new AssociatedUri();
            }
        }
        public AssociatedUri GetElementByLongUri(string longUri)
        {
            List<AssociatedUri> uri;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "SELECT TOP 1 * FROM [UriReduction].[AssociatedUri] where LongUri=@longUri;";
                uri = db.Query<AssociatedUri>(sqlQuery, new { longUri }).ToList();
            }

            return CheckListOfUri(uri);
        }

        public int UpdateElementRequestFieldById(int requestCount, int id)
        {
            int result;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "UPDATE [UriReduction].[AssociatedUri] set RequestCount = @requestCount  where Id = @id";
                result = db.Execute(sqlQuery, new {id, requestCount });
            }

            return result;
        }

        public int CreatNewElement(AssociatedUri uri)
        {
            int result;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "INSERT INTO [UriReduction].[AssociatedUri] (LongUri, ShortUri) VALUES(@LongUri,@ShortUri);";
                result = db.Execute(sqlQuery, uri);
            }
            return result;
        }
        public int DeleteElement(int id)
        {
            int result;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "DELETE from [UriReduction].[AssociatedUri] where id = @id ";
                result = db.Execute(sqlQuery, new { id });
            }
            return result;
        }
    }
}

