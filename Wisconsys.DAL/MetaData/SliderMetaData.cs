using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wisconsys.DAL
{
    public class SliderMetaData
    {
        [Required(ErrorMessage ="This filed is required")]
        public string Discription { get; set; }
        [Required(ErrorMessage ="This filed is required")]
        public string Heading { get; set; }
        [Required(ErrorMessage ="This filed is required")]
        public string BackgrounImg { get; set; }
        [Required(ErrorMessage ="This filed is required")]
        public string Imgurl { get; set; }
        [Required(ErrorMessage ="This filed is required")]
        public int Type { get; set; }
    }

    [MetadataType(typeof(SliderMetaData))]
    public partial class Slider
    {

    }
}
