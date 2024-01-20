using Microsoft.AspNetCore.Mvc;
using SoftkitWeb.Utilitarios;

namespace SoftkitWeb.Controllers
{
    public class CotizadorController : Controller
    {
        private readonly ILogger<CotizadorController> _logger;
        private readonly MetodosApis _metodosApis;

        public CotizadorController(ILogger<CotizadorController> logger, MetodosApis metodosApis)
        {
            _logger = logger;
            _metodosApis = metodosApis;
        }
        public IActionResult Index()
        {
            return View();
        }


        public async Task<IActionResult> ObtenerReglas()
        {
            var apiUrl = "Regla/Lista";
            var datos = await _metodosApis.GetAsync<TuTipo>(apiUrl);

            // Procesar los datos como sea necesario
            return Json(datos);
        }

        public async Task<IActionResult> ObtenerClientes()
        {
            var apiUrl = "Api/GetReglas";
            var datos = await _metodosApis.GetAsync<TuTipo>(apiUrl);

            // Procesar los datos como sea necesario
            return View("TuVista", datos);
        }

        public class TuTipo
        {
            public string nombre { get; set; }
        }



    }
}
