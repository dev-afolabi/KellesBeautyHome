using System.Collections.Generic;
using System.Threading.Tasks;
using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Services.Communication;

namespace kellesbeautyhome.Domain.Services
{
    public interface IPackageService
    {
        Task<IEnumerable<Package>> ListAsync();
        Task<PackageResponse> SaveAsync(Package package);
        Task<PackageResponse> UpdateAsync(int packageid,Package package);
        Task<PackageResponse> DeleteAsync(int packageid);
    }
}