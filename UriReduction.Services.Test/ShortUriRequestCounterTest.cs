using Moq;
using UriReduction.Data;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Models;
using UriReduction.Services.ShortUriRequestCounters;
using Xunit;

namespace UriReduction.Services.Test
{
    public class ShortUriRequestCounterTest
    {
        [Fact]
        public void IncrementShortUriRequestCount_ShouldReturnUpdatedRequestCount()
        {
            const string shortUri = "qwe";
            const string longUri = "https://metanit.com/sharp/aspnet5/22.4.php";
            var fakeRepository = new Mock<IAssociatedUriRepository>();
            fakeRepository.Setup(repo=>repo.GetElementByShortUri(shortUri))
                .Returns(new AssociatedUri { Id = 0, LongUri = longUri, ShortUri = shortUri, RequestCount = 0});
            fakeRepository.Setup(repo => repo.UpdateElementRequestFieldById(1, 0)).Returns(1);
            fakeRepository.Setup(repo => repo.GetElementById(0))
                .Returns(new AssociatedUri {Id = 0, LongUri = longUri, ShortUri = shortUri, RequestCount = 1});
            var counter = new ShortUriRequestCounter(fakeRepository.Object);

            var result = counter.IncrementShortUriRequestCount(shortUri);

            Assert.Equal(1,result);
        }
    }
}
