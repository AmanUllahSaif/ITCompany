using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wisconsys.DAL;

namespace Wisconsys.BLL.Handler
{
    public class ProjectHandler : GenericRepository<Project>
    {
        private WisconsysDBEntities _conetxt;

        public ProjectHandler(WisconsysDBEntities context):base(context)
        {
            _conetxt = context;
        }

    }
}
