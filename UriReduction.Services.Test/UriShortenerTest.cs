using Moq;
using UriReduction.Data;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Models;
using UriReduction.Services.HashGenerators;
using UriReduction.Services.UriShorteners;
using Xunit;

namespace UriReduction.Services.Test
{
    public class UriShortenerTest
    {
        readonly string longUri = "https://metanit.com/sharp/aspnet5/22.4.php";
        readonly string shortUri = "qwe";
        readonly int? userId = 1;
        public UriShortenerTest()
        {
            longUri = "https://metanit.com/sharp/aspnet5/22.4.php";
            shortUri = "qwe";
            userId = 1;
        }
        [Fact]
        public void Shorten_ShoulReturnAssociatedShortUri_WhenFindLongUri()
        {
            var fakeRepository = new Mock<IAssociatedUriRepository>();
            fakeRepository.Setup(repo => repo.GetElementByLongUri(longUri))
                .Returns(new AssociatedUri {Id = 0, LongUri = longUri, ShortUri = shortUri});
            var fakeHashGeneretor = new Mock<IHashGeneretor>();
            var shorten = new UriShortener(fakeRepository.Object,fakeHashGeneretor.Object);

            var result = shorten.Shorten(longUri,userId);

            Assert.Equal(shortUri,result);
        }

        [Fact]
        public void Shorten_ShoulReturnNewAssociatedUri_WhenNotFindLngUri()
        {
            var fakeRepository = new Mock<IAssociatedUriRepository>();
            fakeRepository.Setup(repo => repo.GetElementByLongUri(longUri)).Returns(new AssociatedUri ());
            fakeRepository
                .Setup(repo => repo.CreatNewElement(new AssociatedUri {LongUri = longUri, ShortUri = shortUri}))
                .Returns(1);
            var fakeHashGeneretor = new Mock<IHashGeneretor>();
            fakeHashGeneretor.Setup(generetor => generetor.Generate(longUri, 10)).Returns(shortUri);
            var shorten = new UriShortener(fakeRepository.Object, fakeHashGeneretor.Object);

            var result = shorten.Shorten(longUri,userId);

            Assert.Equal(shortUri,result);
        }
    }
}
