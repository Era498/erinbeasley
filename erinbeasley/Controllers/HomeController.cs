using Microsoft.AspNetCore.Mvc;

namespace erinbeasley.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
