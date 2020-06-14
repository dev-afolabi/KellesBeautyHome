using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace kellesbeautyhome.JsonConverter
{
    public class DateTimeConverter : JsonConverter<DateTime>
    {
        public string DateTimeFormat { get; set; } = @"dd/MM/yyyy";
        public DateTime DefaultDateTimeSpan { get; set; } = DateTime.MinValue;

        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string dateTimeString = reader.GetString();
            if(DateTime.TryParseExact(dateTimeString, DateTimeFormat,CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime dateTimeSpan))
            {
                return dateTimeSpan;
            }
            return DefaultDateTimeSpan;
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString(DateTimeFormat));
        }
    }
}