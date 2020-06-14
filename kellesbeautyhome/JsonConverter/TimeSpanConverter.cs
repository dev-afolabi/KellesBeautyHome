using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace kellesbeautyhome.JsonConverter
{
    public class TimeSpanConverter : JsonConverter<TimeSpan>
    {
        public string TimeSpanFormat { get; set; } = "hh':'mm':'ss";
        public TimeSpan DefaultTimeSpan { get; set; } = TimeSpan.MinValue;

        public override TimeSpan Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string timeString = reader.GetString();
            if(TimeSpan.TryParseExact(timeString, TimeSpanFormat, CultureInfo.InvariantCulture, out TimeSpan timeSpan))
            {
                return timeSpan;
            }
            return DefaultTimeSpan;
        }

        public override void Write(Utf8JsonWriter writer, TimeSpan value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString(TimeSpanFormat));
        }
    }
}