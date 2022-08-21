using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wisconsys.DAL
{
    class ProductMetaData
    {
        [Display(Name="Name")]
        [Required(ErrorMessage ="This field is required")]
        public string Name { get; set; }
        [Display(Name = "Discription")]
        [Required(ErrorMessage = "This field is required")]
        public string Discription { get; set; }

        public bool IsActive { get; set; }
    }
    [MetadataType(typeof(ProductMetaData))]
    public partial class Product
    {

    }
}
