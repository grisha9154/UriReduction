using Microsoft.AspNetCore.Mvc;
using Moq;
using UriReduction.API.Controllers;
using UriReduction.Services.ShortUriDecoders;
using Xunit;

namespace UriReduction.API.Test
{
    public class ShortUriRedirectionControllerTest
    {
        [Fact]
        public void Get_ShouldReturnIActionResult()
        {
            const string shortUri = "qwe";
            const string longUri = "https://translate.yandex.by/?lang=en-ru&text=Fake";
            var fakeShortUriDecoder = new Mock<IShortUriDecoder>();
            fakeShortUriDecoder.Setup(decoder => decoder.DecipherShortUri(shortUri)).Returns(longUri);
            var redirectController = new ShortUriRedirectionController(fakeShortUriDecoder.Object);

            var result = redirectController.Get(shortUri);

            Assert.IsType<RedirectResult>(result);
        }
    }
}
