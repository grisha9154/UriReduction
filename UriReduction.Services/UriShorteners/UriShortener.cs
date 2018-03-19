using System;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Models;
using UriReduction.Services.HashGenerators;

namespace UriReduction.Services.UriShorteners
{
    public class UriShortener:IUriShortener
    {
        private readonly IAssociatedUriRepository _repository;
        private readonly IHashGeneretor _hashGeneretor;
        public UriShortener(IAssociatedUriRepository repository,IHashGeneretor hashGeneretor)
        {
            _repository = repository;
            _hashGeneretor = hashGeneretor;
        }
        public string Shorten(string longUri,int? userId)
        {
            var associatedUri = ReturnAssociatedUriIfExist(longUri);
            return associatedUri.ShortUri ?? CreateNewAssociatedUri(longUri,userId);
        }
        private string CreateNewAssociatedUri(string longUri,int? userId)
        {
            var shortUri = _hashGeneretor.Generate(longUri,10);
            if (IsShortUriExist(shortUri))
            {
                shortUri = CreateNewAssociatedUri(longUri, userId);
            }
            else
            {
                _repository.CreatNewElement(new AssociatedUri { LongUri = longUri, ShortUri = shortUri, UserId = userId });
            }
            return shortUri;
        }

        private bool IsShortUriExist(string shortUri)
        {
           var uri = _repository.GetElementByShortUri(shortUri);
            return uri != null;
        }
        private AssociatedUri ReturnAssociatedUriIfExist(string longUri)
        {
            return _repository.GetElementByLongUri(longUri);
        }
    }
}
