using System.Text;
using UriReduction.Data;
using RabbitMQ.Client;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Models;

namespace UriReduction.Services.ShortUriRequestCounters
{
    public class ShortUriRequestCounter: IShortUriRequestCounter
    {
        private readonly IAssociatedUriRepository _repository;

        public ShortUriRequestCounter(IAssociatedUriRepository repository)
        {
            _repository = repository;
        }

        public int IncrementShortUriRequestCount(string shortUri)
        {
            var factory = new ConnectionFactory{HostName = "localhost"};
            using (var connection = factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare(
                        queue: "ShortUriIncrementQueue",
                        durable: true,
                        exclusive: false,
                        autoDelete: false,
                        arguments:null);

                    var body = Encoding.UTF8.GetBytes(shortUri);

                    var properties = channel.CreateBasicProperties();
                    properties.Persistent = true;

                    channel.BasicPublish(
                        exchange:"",
                        routingKey: "ShortUriIncrementQueue",
                        basicProperties:properties,
                        body:body);
                }
            }
            return 1;
        }
    }
}
