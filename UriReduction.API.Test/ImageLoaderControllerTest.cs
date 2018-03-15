using Microsoft.AspNetCore.Http;
using Moq;
using UriReduction.API.Controllers;
using UriReduction.Services.ImageUpload;
using UriReduction.Services.UriShorteners;
using Xunit;


namespace UriReduction.API.Test
{
    public class ImageLoaderControllerTest
    {
        [Fact]
        public void Post_ShouldReturnShortUri()
        {
            const string longUri = "https://music.yandex.by/genre/музыка%20из%20видеоигр";
            const string shortUri = "qwe";
            var fakeFile = new Mock<IFormFile>();
            var fakeUploader = new Mock<IImageUploader>();
            fakeUploader.Setup(uploader => uploader.UploadImage(fakeFile.Object)).Returns(longUri);
            var fakeUriShortener = new Mock<IUriShortener>();
            fakeUriShortener.Setup(shortener => shortener.Shorten(longUri)).Returns(shortUri);
            var imageLoaderController = new ImageLoaderController(fakeUploader.Object,fakeUriShortener.Object);

            var result = imageLoaderController.Post(fakeFile.Object);
            var expect = "{" +
                         "\"shortUri\":" + "\"SUGC/" + $"{shortUri}\"" +
                         "}";
            Assert.Equal(expect,result);
        } 
    }
}
