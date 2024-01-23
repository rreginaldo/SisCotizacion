using Microsoft.AspNetCore.Mvc;
using SoftkitWeb.Utilitarios;
using System.Diagnostics.Metrics;
using System.Text.RegularExpressions;
using static System.Runtime.InteropServices.JavaScript.JSType;

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

        public IActionResult Index2()
        {
            return View();
        }



        public async Task<IActionResult> ObtenerReglas()
        {
            var apiUrl = "Regla/Lista";
            //var datos = await _metodosApis.GetAsync<ReglaBE>(apiUrl);

            var datos = new List<ReglaBE>() {
                new ReglaBE()
                {
                Grupo = "Prueba",
                Dealer = "Prueba",
                Alter = "Prueba",
                Regla = "Prueba",
                Max_Dealer = "Prueba",
                Min_Alter = "Prueba",
                Max_Alter = "Prueba",
                IdRegla = "Prueba",
                },
                 new ReglaBE()
                {
                Grupo = "Prueba2",
                Dealer = "Prueba2",
                Alter = "Prueba2",
                Regla = "Prueba2",
                Max_Dealer = "Prueba2",
                Min_Alter = "Prueba2",
                Max_Alter = "Prueba2",
                IdRegla = "Prueba2",
                } 
            };

            // resultado exitoso 
            var obj = new
            {
                internalStatus = 1,
                data = datos
            };

            // Procesar los datos como sea necesario
            return Json(obj);
        }

        public async Task<IActionResult> ObtenerClientes()
        {
            var apiUrl = "Api/GetReglas";
            var datos = await _metodosApis.GetAsync<TuTipo>(apiUrl);

            // Procesar los datos como sea necesario
            return View("TuVista", datos);
        }


        // entidades que estan en el api 
        public class TuTipo
        {
            public string nombre { get; set; }
        }

        public class ReglaBE
        {
            public string Grupo { get; set; }
            public string Dealer { get; set; }
            public string Alter { get; set; }
            public string Regla { get; set; }
            public string Max_Dealer { get; set; }
            public string Min_Alter { get; set; }
            public string Max_Alter { get; set; }
            public string IdRegla { get; set; }

        }



    }
}
