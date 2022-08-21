using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wisconsys.DAL;
using Wisconsys.BLL.Handler;
using Wisconsys.UI.Util;

namespace Wisconsys.UI.Areas.Admin.Controllers
{
   // [Authorize]
    public class SliderController : Controller
    {
        WisconsysDBEntities context;
        SliderHandler sliderHandler;

        public SliderController()
        {
            context = new WisconsysDBEntities();
            sliderHandler = new SliderHandler(context);
        }

        // GET: Admin/Slider
        public ActionResult Index()
        {
            var slides = sliderHandler.List.Where(x => x.IsActive);
            return View(slides);
        }

        public PartialViewResult Create()
        {
            return PartialView("_CreatePartial");
        }

        [HttpPost]
        public ActionResult Create(Slider model, HttpPostedFileBase file, HttpPostedFileBase background)
        {
            if (file == null || background == null)
            {
                TempData["Error"] = "Upload Image.";
                return RedirectToAction("index");
            }
            model.Imgurl = FileManager.SaveImage(file);
            model.BackgrounImg = FileManager.SaveImage(background);
            model.IsActive = true;
            sliderHandler.Add(model);
            return RedirectToAction("index");
        }

        [HttpGet]
        public ActionResult Delete(long Id)
        {
            var slider = sliderHandler.FindById(Id);
            slider.IsActive = false;
            sliderHandler.Update(slider);
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