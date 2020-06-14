using System.ComponentModel.DataAnnotations;

namespace kellesbeautyhome.Resources
{
    public class SavePackageResource
    {
        [Required]
        [MaxLength(50)]
        public string name { get; set; }
    }
}