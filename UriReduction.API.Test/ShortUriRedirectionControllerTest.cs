using Microsoft.AspNetCore.Mvc;
using Moq;
using UriReduction.API.Controllers;
using UriReduction.Services.ShortUriDecoders;
using UriReduction.Services.ShortUriRequestCounters;
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
            var fakeShortUriRequestCounter = new Mock<IShortUriRequestCounter>();
            fakeShortUriRequestCounter.Setup(counter => counter.IncrementShortUriRequestCount(shortUri)).Returns(1);
            var redirectController = new ShortUriRedirectionController(fakeShortUriDecoder.Object,fakeShortUriRequestCounter.Object);

            var result = redirectController.Get(shortUri);

            Assert.IsType<RedirectResult>(result);
        }
    }
}
