using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace UriReduction.Services.HashGenerators
{
    public class HashGenerator: IHashGeneretor
    {
        public string Generate(string inputString, int size)
        {
            var shortUri = GetHashString(inputString);
            return shortUri.Substring(0, size);
        }
        private static string GetHashString(string inputString)
        {
            var sb = new StringBuilder();
            foreach (var b in GetHash(inputString))
                sb.Append(b.ToString("X2"));
            return sb.ToString();
        }
        private static IEnumerable<byte> GetHash(string inputString)
        {
            HashAlgorithm algorithm = MD5.Create();
            return algorithm.ComputeHash(Encoding.UTF8.GetBytes(inputString));
        }
    }
}
