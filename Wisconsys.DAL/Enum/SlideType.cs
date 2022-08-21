using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wisconsys.DAL.Enum
{
    public enum SlideType
    {
        [Display(Name ="Center")]
        Center = 1,
        [Display(Name ="Left Text")]
        LeftText = 2,
        [Display(Name ="Right Text")]
        RightText = 3
    }
}
