using System.Collections.Generic;

namespace UriReduction.Data
{
    public interface IRepository<T>
    {
        List<T> GetAllElemnt();
        T GetElementById(int id);
        int CreatNewElement(T element);
        int DeleteElement(int id);
    }
}
