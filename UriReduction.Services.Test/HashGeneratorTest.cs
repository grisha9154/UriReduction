using UriReduction.Services.HashGenerators;
using Xunit;

namespace UriReduction.Services.Test
{
    public class HashGeneratorTest
    {
        private string inputString = "https://translate.yandex.by/?lang=ru-en&text=%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%84%D1%80%D0%B0%D1%82%D0%BE%D1%80";
        [Fact]
        public void Generate_ShouldReturnHashSpecifySize()
        {
            int size = 10;
            var generator = new HashGenerator();

            var result = generator.Generate(inputString, size);

            Assert.Equal(size,result.Length);

        }
    }
}
