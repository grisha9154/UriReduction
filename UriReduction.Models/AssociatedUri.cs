namespace UriReduction.Models
{
    public class AssociatedUri
    {
        public int Id { get; set; }
        public string LongUri { get; set; }
        public string ShortUri { get; set; }
        public int RequestCount { get; set; }
        public int? UserId { get; set; }
    }
}
