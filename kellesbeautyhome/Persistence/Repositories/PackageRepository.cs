using System.Collections.Generic;
using System.Threading.Tasks;
using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Domain.Repositories;
using kellesbeautyhome.Persistence.Contexts;
using Microsoft.EntityFrameworkCore;

namespace kellesbeautyhome.Persistence.Repositories
{
    public class PackageRepository : BaseRepository, IPackageRepository
    {
        public PackageRepository(AppDbContext context):base(context)
        {
            
        }

        public async Task<IEnumerable<Package>> ListAsync()
        {
            return await context.Packages.ToListAsync();
        }

        public async Task AddAsync(Package package)
        {
            await context.Packages.AddAsync(package);
        }

        public async Task<Package> FindByIdAsync(int packageId)
        {
            return await context.Packages.FindAsync(packageId);
        }

        public void Update(Package package)
        {
            context.Packages.Update(package);
        }

        public void Remove(Package package)
        {
            context.Packages.Remove(package);
        }
    }
}