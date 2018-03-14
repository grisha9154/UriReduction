using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace UriReduction.Services.ImageUpload
{
    public class ImageUploader: IImageUploader
    {
        private readonly IConfiguration _configuration;

       public ImageUploader(IConfiguration configuration)
       {
            _configuration = configuration;
       }
        public string UploadImage(IFormFile file)
        {
            var cloudinary = new Cloudinary(
                new Account(
                    _configuration["Cloudinary:CloudName"],
                    _configuration["Cloudinary:APIKey"],
                    _configuration["Cloudinary:APISecret"]));

            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(file.Name,file.OpenReadStream()),
            };

            var uploadResult = cloudinary.Upload(uploadParams);
            return uploadResult.Uri.ToString();
        }
    }
}
