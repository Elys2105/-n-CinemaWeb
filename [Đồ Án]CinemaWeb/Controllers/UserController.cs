using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _Đồ_Án_CinemaWeb.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult Resgiter()
        {
            return View();
        }
        public ActionResult KhuyenMai()
        {
            return View();
        }
        public ActionResult LienHe()
        {
            return View();
        }
    }
}