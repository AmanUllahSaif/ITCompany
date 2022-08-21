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
    //[Authorize]
    public class ProductController : Controller
    {

        WisconsysDBEntities context;
        ProductHandler productHandler;
        
        public ProductController()
        {
            context = new WisconsysDBEntities();
            productHandler = new ProductHandler(context);
        }
        // GET: Admin/Product
        public ActionResult Index()
        {
            var products = productHandler.List.Where(x => x.IsActive);
            return View(products);
        }

        public PartialViewResult Create()
        {
            return PartialView("_CreatePartial");
        }

        [HttpPost]
        public ActionResult Create(Product model, List<HttpPostedFileBase> productimage)
        {
            if (productimage == null || productimage.Count < 1)
            {
                TempData["error"] = "Plase upload image";
                return RedirectToAction("index");
            }
            List<ProductImage> images = new List<ProductImage>();
            foreach (var item in productimage)
            {
                ProductImage img = new ProductImage();
                img.Url = FileManager.SaveImage(item);
                img.IsActive = true;
                images.Add(img);
            }
            model.IsActive = true;
            model.ProductImages = images;
            productHandler.Add(model);
            return RedirectToAction("index");
        }

        [HttpGet]
        public ActionResult Delete(long Id)
        {
            var product = productHandler.FindById(Id);
            product.IsActive = false;
            productHandler.Update(product);
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