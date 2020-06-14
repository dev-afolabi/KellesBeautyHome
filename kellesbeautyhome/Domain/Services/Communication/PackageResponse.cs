using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Domain.Services.Communication;

namespace kellesbeautyhome.Services.Communication
{
    public class PackageResponse : BaseResponse
    {
        public Package Package { get; private set; }

        private PackageResponse(bool success, string message, Package package) : base(success, message)
        {
            Package = package;
        }

        /// <summary>
        /// Creates a success response.
        /// </summary>
        /// <param name="package">Saved package.</param>
        /// <returns>Response.</returns>
        public PackageResponse(Package package) : this(true, string.Empty, package)
        { }

        /// <summary>
        /// Creates am error response.
        /// </summary>
        /// <param name="message">Error message.</param>
        /// <returns>Response.</returns>
        public PackageResponse(string message) : this(false, message, null)
        { }
    }
}