using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using SniffingApi.Contracts;

namespace SniffingApi.Infrastructure
{
    public class SqlConnectionFactory : IDbConnectionFactory
    {
        private readonly string _connectionString;

        public SqlConnectionFactory(IConfiguration configuration)
            => _connectionString = configuration.GetConnectionString("DefaultConnection");

        public IDbConnection CreateConnection()
            => new SqlConnection(_connectionString);
    }
}
