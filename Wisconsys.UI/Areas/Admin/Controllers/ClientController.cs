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
    public class ClientController : Controller
    {
        WisconsysDBEntities context;
        ClientHandler clientHandler;
        public ClientController()
        {
            context = new WisconsysDBEntities();
            clientHandler = new ClientHandler(context);
        }
        // GET: Admin/Client
        public ActionResult Index()
        {
            var clients = clientHandler.List.Where(x => x.IsActive);
            return View(clients);
        }


        public PartialViewResult Create()
        {
            return PartialView("_CreatePartial");
        }

        [HttpPost]
        public ActionResult Create(Client model, HttpPostedFileBase file)
        {
            if (file == null)
            {
                TempData["Error"] = "Upload Image.";
                return RedirectToAction("index");
            }
            model.ImgUrl = FileManager.SaveImage(file);
            model.IsActive = true;
            clientHandler.Add(model);
            return RedirectToAction("index");
        }

        [HttpGet]
        public ActionResult Delete(long Id)
        {
            var client = clientHandler.FindById(Id);
            client.IsActive = false;
            clientHandler.Update(client);
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