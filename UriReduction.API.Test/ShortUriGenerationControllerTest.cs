using Moq;
using UriReduction.API.Controllers;
using UriReduction.Models;
using UriReduction.Services.UriShorteners;
using Xunit;

namespace UriReduction.API.Test
{
    public class ShortUriGenerationControllerTest
    {
        [Fact]
        public void Post_ShouldReturnShortUriAssociatedUri()
        {
            const string longUri = "https://music.yandex.by/genre/музыка%20из%20видеоигр";
            const string shortUri = "qwe";
            var fakeUriShortener = new Mock<IUriShortener>();
            fakeUriShortener.Setup(shortener => shortener.Shorten(longUri)).Returns(shortUri);
            var generationController = new ShortUriGenerationController(fakeUriShortener.Object);

            var result = generationController.Post(new AssociatedUri{ShortUri = shortUri, LongUri = longUri});

            Assert.Equal("SUGC/"+shortUri,result);
        }
    }
}
