using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Text;
using Receive;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Data.DataBaseConnectionConfig;
using UriReduction.Models;

namespace UriReduction
{
    public class Receive
    {
        private readonly IAssociatedUriRepository _repository;

        public Receive()
        {
            _repository = new AssociatedUriRepository(new Connnection());
        }

       public void ReceiveMessage()
        {
            var factory = new ConnectionFactory{HostName = "localhost"};
            using (var connection = factory.CreateConnection())
            {
                using (var channel = connection.CreateModel())
                {
                    channel.QueueDeclare(queue: "ShortUriIncrementQueue",
                        durable: true,
                        exclusive: false,
                        autoDelete: false,
                        arguments: null);

                    var consumer = new EventingBasicConsumer(channel);
                    consumer.Received += (model, ea) =>
                    {
                        var body = ea.Body;
                        var shortUri = Encoding.UTF8.GetString(body);
                         AssociatedUri uri = _repository.GetElementByShortUri(shortUri);
                         _repository.UpdateElementRequestFieldById(uri.RequestCount+1,uri.Id);
                         uri = _repository.GetElementById(uri.Id);

                        channel.BasicAck(deliveryTag: ea.DeliveryTag,multiple:false);
                    };

                    channel.BasicConsume(queue: "ShortUriIncrementQueue",
                        autoAck: false,
                        consumer: consumer);
                    Console.WriteLine("Press [enter] to exit.");
                    Console.ReadLine();

                }
            }
        }
    }
}
