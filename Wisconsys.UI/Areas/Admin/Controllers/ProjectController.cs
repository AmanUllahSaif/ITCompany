using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wisconsys.BLL.Handler;
using Wisconsys.DAL;
using Wisconsys.UI.Util;

namespace Wisconsys.UI.Areas.Admin.Controllers
{
   // [Authorize]
    public class ProjectController : Controller
    {

        WisconsysDBEntities context;
        ProjectHandler projectHandler;

        public ProjectController()
        {
            context = new WisconsysDBEntities();
            projectHandler = new ProjectHandler(context);
        } 
        // GET: Admin/Project
        public ActionResult Index()
        {
            var projects = projectHandler.List.Where(x => x.IsActive);
            return View(projects);
        }

        public PartialViewResult Create()
        {
            return PartialView("_CreatePartial");
        }

        [HttpPost]
        public ActionResult Create(Project model, HttpPostedFileBase file)
        {
            if (file == null)
            {
                TempData["Error"] = "Upload Image.";
                return RedirectToAction("index");
            }
            model.ImageUrl = FileManager.SaveImage(file);
            model.IsActive = true;
            projectHandler.Add(model);
            return RedirectToAction("index");
        }

        [HttpGet]
        public ActionResult Delete(long Id)
        {
            var project =projectHandler.FindById(Id);
            project.IsActive = false;
            projectHandler.Update(project);
            return RedirectToAction("index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                context.Dispose();
                context = null;
            }
            base.Dispose(disposing);
        }
    }
}