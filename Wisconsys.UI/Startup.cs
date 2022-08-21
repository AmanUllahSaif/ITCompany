using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Wisconsys.UI.Startup))]
namespace Wisconsys.UI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
