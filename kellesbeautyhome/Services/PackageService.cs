using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Domain.Repositories;
using kellesbeautyhome.Domain.Services;
using kellesbeautyhome.Services.Communication;
using Microsoft.Extensions.Caching.Memory;

namespace kellesbeautyhome.Services
{
    public class PackageService : IPackageService
    {
        private readonly IPackageRepository packageRepository;
        private readonly IUnitOfWork unitOfWork;

        public PackageService(IPackageRepository packageRepository, IUnitOfWork unitOfWork, IMemoryCache cache)
        {
            this.packageRepository = packageRepository;
            this.unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Package>> ListAsync()
        {
            return await packageRepository.ListAsync();
        }

        public async Task<PackageResponse> SaveAsync(Package package)
        {
            try
            {
                await packageRepository.AddAsync(package);
                await unitOfWork.CompleteAsync();

                return new PackageResponse(package);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new PackageResponse($"An error occurred when saving the package: {ex.Message}");
            }
        }

        public async Task<PackageResponse> UpdateAsync(int packageid, Package package)
        {
            var existingPackage = await packageRepository.FindByIdAsync(packageid);

            if (existingPackage == null)
                return new PackageResponse("Package not found.");

            existingPackage.name = package.name;

            try
            {
                packageRepository.Update(existingPackage);
                await unitOfWork.CompleteAsync();

                return new PackageResponse(existingPackage);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new PackageResponse($"An error occurred when updating the package: {ex.Message}");
            }
        }

        public async Task<PackageResponse> DeleteAsync(int id)
        {
            var existingPackage = await packageRepository.FindByIdAsync(id);

            if (existingPackage == null)
                return new PackageResponse("Package not found.");

            try
            {
                packageRepository.Remove(existingPackage);
                await unitOfWork.CompleteAsync();

                return new PackageResponse(existingPackage);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new PackageResponse($"An error occurred when deleting the package: {ex.Message}");
            }
        }
    }
}
