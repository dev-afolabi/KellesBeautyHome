using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using kellesbeautyhome.Domain.Repositories;
using kellesbeautyhome.Persistence.Repositories;
using kellesbeautyhome.Persistence.Contexts;
using kellesbeautyhome.Domain.Models;

namespace kellesbeautyhome.Persistence.Repositories
{
	public class ReservationRepository : BaseRepository, IReservationRepository
	{
		public ReservationRepository(AppDbContext context) : base(context) { }

        public async Task<IEnumerable<Reservation>> ListAsync()
        {
            return await context.Reservations
                                 .Include(p => p.package)
                                 .ToListAsync();
        }

        public async Task<Reservation> FindByIdAsync(int id)
        {
            return await context.Reservations
                                 .Include(p=>p.package)
                                 .FirstOrDefaultAsync(p => p.id == id); // Since Include changes the method return, we can't use FindAsync
        }

        public async Task AddAsync(Reservation reservation)
        {
            await context.Reservations.AddAsync(reservation);
        }

        public void Update(Reservation reservation)
        {
            context.Reservations.Update(reservation);
        }

        public void Remove(Reservation reservation)
        {
            context.Reservations.Remove(reservation);
        }
	}
}