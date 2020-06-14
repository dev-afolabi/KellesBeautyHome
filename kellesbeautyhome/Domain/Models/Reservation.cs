using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using kellesbeautyhome.JsonConverter;

namespace kellesbeautyhome.Domain.Models
{
    public class Reservation
    {
        public int id { get; set; }
        public int Packageid { get; set; }
        public Package package { get; set; }
        public string name { get; set; }
        public DateTime ReservationDate { get; set; }
        public TimeSpan ReservationTime { get; set; }
        public string Address { get; set; }
    }

}