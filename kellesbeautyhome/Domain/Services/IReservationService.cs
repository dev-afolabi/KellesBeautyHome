using System.Collections.Generic;
using System.Threading.Tasks;
using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Domain.Services.Communication;

namespace kellesbeautyhome.Domain.Services
{
    public interface IReservationService
    {
        Task<IEnumerable<Reservation>> ListAsync();
        Task<ReservationResponse> SaveAsync(Reservation reservation);
        Task<ReservationResponse> UpdateAsync(int id, Reservation reservation);
        Task<ReservationResponse> DeleteAsync(int id);   
    }
}