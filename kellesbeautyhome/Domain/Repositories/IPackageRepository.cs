using System.Collections.Generic;
using System.Threading.Tasks;
using kellesbeautyhome.Domain.Models;

namespace kellesbeautyhome.Domain.Repositories
{
    public interface IPackageRepository
    {
        Task<IEnumerable<Package>> ListAsync();
        Task AddAsync(Package package);
        Task<Package> FindByIdAsync(int id);
        void Update(Package package);
        void Remove(Package package);
    }
}