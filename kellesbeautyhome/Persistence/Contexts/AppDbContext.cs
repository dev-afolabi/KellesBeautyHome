using kellesbeautyhome.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace kellesbeautyhome.Persistence.Contexts
{
    public class AppDbContext : DbContext
    {
        public DbSet<Reservation> Reservations {get; set;}
        public DbSet<Package> Packages { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
            
        }
    }
}