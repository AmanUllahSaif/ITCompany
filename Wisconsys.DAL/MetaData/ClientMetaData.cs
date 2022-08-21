using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wisconsys.DAL
{
    public class ClientMetaData
    {
        [Required(ErrorMessage ="This field is required")]
        public string Name { get; set; }
        [Required(ErrorMessage ="This field is required")]
        public string ImgUrl { get; set; }
    }
    [MetadataType(typeof(ClientMetaData))]
    public partial class Client
    {

    }
}
