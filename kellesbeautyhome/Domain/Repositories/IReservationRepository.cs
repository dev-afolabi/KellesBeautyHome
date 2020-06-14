using System.Collections.Generic;
using System.Threading.Tasks;
using kellesbeautyhome.Domain.Models;

namespace kellesbeautyhome.Domain.Repositories
{
    public interface IReservationRepository
    {
        Task<IEnumerable<Reservation>> ListAsync();

        Task AddAsync(Reservation reservation);
        Task<Reservation> FindByIdAsync(int id);
        void Update(Reservation reservation);
        void Remove(Reservation reservation);
    }
}