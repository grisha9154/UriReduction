namespace UriReduction.Services.UriShorteners
{
    public interface IUriShortener
    {
        string Shorten(string longUri,int? userId);
    }
}
