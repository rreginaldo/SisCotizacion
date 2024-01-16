using Microsoft.AspNetCore.Mvc;

namespace SoftkitWeb.Controllers
{
    public class CotizadorController : Controller
    {
        private readonly ILogger<CotizadorController> _logger;

        public CotizadorController(ILogger<CotizadorController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
