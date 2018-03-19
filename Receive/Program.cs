using System;
using System.Collections.Generic;
using System.Text;
using UriReduction.Data.DataBaseConnectionConfig;

namespace Receive
{
    class Program
    {
        public static void Main(string[] args)
        {
            var consumer = new UriReduction.Receive();
            consumer.ReceiveMessage();
            for (;;)
            {

            }
        }
    }
}
