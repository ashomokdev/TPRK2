using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TPRK2.Models;

namespace TPRK2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Graph()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        //[HttpPost]
        public ActionResult CreateTable(int x)
        {
           Table t = new Table();
           t.x = x;
           // ViewBag.Table = t;
            
            return View(t);
        }
    }
}