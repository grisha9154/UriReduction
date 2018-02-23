namespace UriReduction.Services.HashGenerators
{
    public interface IHashGeneretor
    {
       string Generate(string inputString, int size);
    }
}
