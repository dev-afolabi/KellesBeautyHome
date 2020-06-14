using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using kellesbeautyhome.JsonConverter;

namespace kellesbeautyhome.Resources
{
    public class SaveReservationResource
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [JsonConverter(typeof(DateTimeConverter))]
        public DateTime ReservationDate { get; set; }
        [Required]
        [JsonConverter(typeof(TimeSpanConverter))]
        public TimeSpan ReservationTime { get; set; }
        [Required]
        [MaxLength(200)]
        public string Address { get; set; }
        [Required]
        public int PackageId { get; set; }
    }
}