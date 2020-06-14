using System;
using System.Text.Json.Serialization;
using kellesbeautyhome.JsonConverter;

namespace kellesbeautyhome.Resources
{
    public class ReservationResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public PackageResource Package { get; set; }
        public DateTime ReservationDate { get; set; }
        public TimeSpan ReservationTime { get; set; }
        public string Address { get; set; } 
    }
}