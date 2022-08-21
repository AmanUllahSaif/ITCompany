using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wisconsys.DAL.MetaData
{
    class ProductImageMetaData
    {
        public long ProductId { get; set; }
        [Display(Name = "Url")]
        [Required(ErrorMessage = "This field is required")]
        public string Url { get; set; }
        public bool IsActive { get; set; }

        public virtual Product Product { get; set; }
    }
    [MetadataType(typeof(ProductImageMetaData))]
    public partial class Product
    {
        
    }
}
