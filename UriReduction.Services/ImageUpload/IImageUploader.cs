using Microsoft.AspNetCore.Http;

namespace UriReduction.Services.ImageUpload
{
    public interface IImageUploader
    {
        string UploadImage(IFormFile file);
    }
}
