using Moq;
using UriReduction.Data;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Models;
using UriReduction.Services.ShortUriDecoders;
using Xunit;

namespace UriReduction.Services.Test
{
    public class ShortUriDecoderTest
    {
        [Fact]
        public void DecipherShortUri_ShouldReturnLongUri_WhenFindAssociatedShortUri()
        {
            const string longUri = "https://metanit.com/sharp/aspnet5/22.4.php";
            const string shortUri = "qwe";
            var mock = new Mock<IAssociatedUriRepository>();
            mock.Setup(repo => repo.GetElementByShortUri("qwe")).Returns(new AssociatedUri{Id = 0,LongUri =longUri , ShortUri = shortUri});
            var decoder= new ShortUriDecoder(mock.Object);

            var result = decoder.DecipherShortUri("qwe");

            Assert.Equal(longUri,result);
        }

        [Fact]
        public void DecipherShortUri_ShouldReturnHomePageUri_WhenNotFindAssociatedShortUri()
        {
            var mock = new Mock<IAssociatedUriRepository>();
            mock.Setup(repo => repo.GetElementByShortUri("qwe")).Returns(new AssociatedUri ());
            var decoder = new ShortUriDecoder(mock.Object);

            var result = decoder.DecipherShortUri("qwe");
            
            Assert.Equal("http://localhost:63303/SUGC",result);
        }
    }
}
