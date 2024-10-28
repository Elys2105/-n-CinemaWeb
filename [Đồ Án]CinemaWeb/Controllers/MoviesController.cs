using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _Đồ_Án_CinemaWeb.Controllers
{
    public class MoviesController : Controller
    {
        // GET: Movies
        public ActionResult LichChieu()
        {
            return View();
        }
        public ActionResult LongAn()
        {
            return View();
        }
    }
}