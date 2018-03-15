using Microsoft.AspNetCore.Mvc;
using Moq;
using UriReduction.API.Controllers;
using UriReduction.Models;
using Xunit;


namespace UriReduction.API.Test
{
    public class AccountSignUpControllerTest
    {
        private readonly Mock<IUserAccountCreator> _fakeCreator;
        private readonly RegistrationModel _model;
        public AccountSignUpControllerTest()
        {
            _fakeCreator = new Mock<IUserAccountCreator>();
            _model = new RegistrationModel { Password = "qwe", Login = "qwe" };
        }
        [Fact]
        public void Post_ShouldReturnOkStatus_WhenLoginAndPasswordValid()
        {
            _fakeCreator.Setup(account => account.AccountCreate(_model)).Returns(true);
            var controller = new AccountSignUpController(_fakeCreator.Object);

            var result = controller.Post(_model);
            Assert.Equal(new OkResult().StatusCode,((OkResult)result).StatusCode);
        }
        [Fact]
        public void Post_ShouldReturnUnauthorizedStatus_WhenLoginAndPasswordUnvalid()
        {
            _fakeCreator.Setup(account => account.AccountCreate(_model)).Returns(false);
            var controller = new AccountSignUpController(_fakeCreator.Object);

            var result = controller.Post(_model);
            Assert.Equal(new UnauthorizedResult().StatusCode, ((UnauthorizedResult)result).StatusCode);
        }
    }
}
