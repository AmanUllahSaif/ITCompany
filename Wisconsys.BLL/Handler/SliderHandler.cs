using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wisconsys.DAL;

namespace Wisconsys.BLL.Handler
{
    public class SliderHandler: GenericRepository<Slider>
    {
        private WisconsysDBEntities _conetxt;

        public SliderHandler(WisconsysDBEntities context):base(context)
        {
            _conetxt = context;
        }
    }
}
