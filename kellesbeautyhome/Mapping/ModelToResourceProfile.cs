using AutoMapper;
using kellesbeautyhome.Domain.Models;

using kellesbeautyhome.Resources;

namespace kellesbeautyhome.Mapping
{
    public class ModelToResourceProfile : Profile
    {
        public ModelToResourceProfile()
        {
            CreateMap<Package, PackageResource>();
            CreateMap<Reservation, ReservationResource>();
        }
    }
}