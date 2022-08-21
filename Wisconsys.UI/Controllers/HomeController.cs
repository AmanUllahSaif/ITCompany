using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wisconsys.BLL.Handler;
using Wisconsys.DAL;
using Wisconsys.UI.Models;
using Wisconsys.UI.Util;

namespace Wisconsys.UI.Controllers
{
    public class HomeController : Controller
    {

        WisconsysDBEntities context;
        ProjectHandler projectHandler;
        ProductHandler productHandler;
        SliderHandler sliderHandler;
        ClientHandler clientHandler;

        public HomeController()
        {
            context = new WisconsysDBEntities();
            projectHandler = new ProjectHandler(context);
            productHandler = new ProductHandler(context);
            sliderHandler = new SliderHandler(context);
            clientHandler = new ClientHandler(context);
        }
        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult Navbar()
        {
            var products = productHandler.List.Where(x => x.IsActive);
            ViewBag.IsPortfolio = projectHandler.List.Where(x => x.IsActive).ToList().Count() > 0;
            return PartialView(products);
        }

        public PartialViewResult Portfolio()
        {
            var projects = projectHandler.List.Where(x => x.IsActive);
            return PartialView(projects);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Services()
        {
            return View();
        }

        public ActionResult Contact()
        {

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Contact(ContactModel model)
        {
            string subject = model.Subject + "(" + model.Email + ")";
            MailManager.SendMail(model.Email, model.Name + "<br />" + model.Message, subject);
            ViewBag.Message = "Your Message is sent to our team we will contact you soon.";
            return View();
            //ViewBag.Message = "Your contact page.";
            //string msg = string.Empty;
            //msg += "Name :" + model.Name + "<br />";
            //if (!String.IsNullOrEmpty(model.Email))
            //{
            //    msg += "Email :" + model.Email + "<br />";
            //}
            //string subject = "Contatc Us Email";
            //if (!string.IsNullOrEmpty(model.Subject))
            //{
            //    subject += "(" + model.Subject + ")";
            //}
            //subject += "|" + DateTime.Now.Date;
            //msg += model.Message;
            //MailManager.SendMail("hamza@mailinator.com", model.Name + "<br />" + msg, subject);
            //return RedirectToAction("Index");
        }


        public PartialViewResult Clients()
        {
            var clients = clientHandler.List.Where(x => x.IsActive);
            return PartialView(clients);
        }

        public PartialViewResult Slider()
        {
            var slider = sliderHandler.List.Where(x => x.IsActive);
            return PartialView("_SliderPartial", slider);
        }

        public ActionResult Product(long Id)
        {
            var product = productHandler.FindById(Id);
            return View(product);
        }
    }
}