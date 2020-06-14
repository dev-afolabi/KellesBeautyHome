using AutoMapper;
using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Resources;

namespace kellesbeautyhome.Mapping
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<SavePackageResource, Package>();
            CreateMap<SaveReservationResource, Reservation>();
        }
    }
}