using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Domain.Services;
using kellesbeautyhome.Extensions;
using kellesbeautyhome.Resources;
using Microsoft.AspNetCore.Mvc;


namespace kellesbeautyhome.Controllers
{
    [Route("/api/[controller]")]
    public class PackagesController : Controller
    {
        private readonly IPackageService packageService;
        private readonly IMapper mapper;

        public PackagesController(IPackageService packageService, IMapper mapper)
        {
            this.packageService = packageService;
            this.mapper = mapper;
        }

        /// <summary>
        /// Lists all categories.
        /// </summary>
        /// <returns>List os categories.</returns>
        
        // [ProducesResponseType(typeof(IEnumerable<PackageResource>), 200)]
        [HttpGet]
        public async Task<IEnumerable<PackageResource>> ListAsync()
        {
            var packages = await packageService.ListAsync();
            var resources = mapper.Map<IEnumerable<Package>, IEnumerable<PackageResource>>(packages);

            return resources;
        }

        /// <summary>
        /// Saves a new category.
        /// </summary>
        /// <param name="resource">Category data.</param>
        /// <returns>Response for the request.</returns>
        
        // [ProducesResponseType(typeof(PackageResource), 201)]
        // [ProducesResponseType(typeof(ErrorResource), 400)]
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] SavePackageResource resource)
        {
            var package = mapper.Map<SavePackageResource, Package>(resource);
            var result = await packageService.SaveAsync(package);

            if (!result.Success)
            {
                return BadRequest(new ErrorResource(result.Message));
            }

            var packageResource = mapper.Map<Package, PackageResource>(result.Package);
            return Ok(packageResource);
        }

        /// <summary>
        /// Updates an existing category according to an identifier.
        /// </summary>
        /// <param name="id">Category identifier.</param>
        /// <param name="resource">Updated category data.</param>
        /// <returns>Response for the request.</returns>
        
        // [ProducesResponseType(typeof(CategResource), 200)]
        // [ProducesResponseType(typeof(ErrorResource), 400)]
        [HttpPut("{packageid}")]
        public async Task<IActionResult> PutAsync(int packageid, [FromBody] SavePackageResource resource)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            var package = mapper.Map<SavePackageResource, Package>(resource);
            var result = await packageService.UpdateAsync(packageid, package);

            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            var packageResource = mapper.Map<Package, PackageResource>(result.Package);
            return Ok(packageResource);
        }

        /// <summary>
        /// Deletes a given category according to an identifier.
        /// </summary>
        /// <param name="id">Category identifier.</param>
        /// <returns>Response for the request.</returns>
        
        // [ProducesResponseType(typeof(CategoryResource), 200)]
        // [ProducesResponseType(typeof(ErrorResource), 400)]
        [HttpDelete("{packageid}")]
        public async Task<IActionResult> DeleteAsync(int packageid)
        {
            var result = await packageService.DeleteAsync(packageid);

            if (!result.Success)
            {
                return BadRequest(result.Message);
            }

            var packageResource = mapper.Map<Package, PackageResource>(result.Package);
            return Ok(packageResource);
        }
    }
}