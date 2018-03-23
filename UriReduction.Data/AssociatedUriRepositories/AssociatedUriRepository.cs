using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using Microsoft.Extensions.Primitives;
using UriReduction.Data.DataBaseConnectionConfig;
using UriReduction.Models;

namespace UriReduction.Data.AssociatedUriRepositories
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
                uri = db.Query<AssociatedUri>("SELECT * FROM [UriReduction].[AssociatedUri] where id = @id and DeletedAt is null", new {id}).ToList();
            }
            return CheckListOfUri(uri);
        }
        public List<AssociatedUri> GetAllElemnt()
        {
            List<AssociatedUri> uris;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                uris = db.Query<AssociatedUri>("SELECT * FROM [UriReduction].[AssociatedUri] where DeletedAt is null").ToList();
            }
            return uris;
        }
        public AssociatedUri GetElementByShortUri(string shortUri)
        {
            AssociatedUri uri;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "SELECT * FROM [UriReduction].[AssociatedUri] where ShortUri=@shortUri and DeletedAt is null;";
                uri = db.QuerySingleOrDefault<AssociatedUri>(sqlQuery, new { shortUri });
            }

            return uri;
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
                var sqlQuery = "SELECT TOP 1 * FROM [UriReduction].[AssociatedUri] where LongUri=@longUri and DeletedAt is null;";
                uri = db.Query<AssociatedUri>(sqlQuery, new { longUri }).ToList();
            }

            return CheckListOfUri(uri);
        }
        public List<AssociatedUri> GetAllElementByUserName(string userName)
        {
            List<AssociatedUri> uri;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "select [uri].[Id],[uri].[LongUri],[uri].[RequestCount],[uri].[ShortUri],[uri].[UserId]  from [UriReduction].[AssociatedUri] as [uri], [UriReduction].[User] as [user] where  [user].UserName =@userName and [uri].UserId = [user].Id;";
                uri = db.Query<AssociatedUri>(sqlQuery, new { userName }).ToList();
            }

            return uri;
        }
        public int UpdateElementRequestFieldById(int requestCount, int id)
        {
            int result;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "UPDATE [UriReduction].[AssociatedUri] set RequestCount = @requestCount  where Id = @id and DeletedAt is null";
                result = db.Execute(sqlQuery, new {id, requestCount });
            }

            return result;
        }
        public int CreatNewElement(AssociatedUri uri)
        {
            int result;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "INSERT INTO [UriReduction].[AssociatedUri] (LongUri, ShortUri,UserId) VALUES(@LongUri,@ShortUri,@UserId);";
                result = db.Execute(sqlQuery, uri);
            }
            return result;
        }
        public int DeleteElement(int id)
        {
            int result;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "UPDATE [UriReduction].[AssociatedUri] set DeletedAt = GETDATE() where Id=@id;";
                result = db.Execute(sqlQuery, new { id });
            }
            return result;
        }
        public int DeleteElement(string shortUri)
        {
            int result;
            using (IDbConnection db = new SqlConnection(_connectionString.GetConnectionString()))
            {
                var sqlQuery = "UPDATE [UriReduction].[AssociatedUri] set DeletedAt = GETDATE() where shortUri=@shortUri;";
                result = db.Execute(sqlQuery, new { shortUri });
            }
            return result;
        }
    }
}

