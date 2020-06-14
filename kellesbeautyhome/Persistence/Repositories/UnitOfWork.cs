using System.Threading.Tasks;
using kellesbeautyhome.Domain.Repositories;
using kellesbeautyhome.Persistence.Contexts;

namespace kellesbeautyhome.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext context;

        public UnitOfWork(AppDbContext context)
        {
            this.context = context;
        }

        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}