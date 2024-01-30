using Microsoft.AspNetCore.Mvc;
using RESTAPI_CORE.Modelos;
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

        public IActionResult Index1()
        {
            return View();
        }

        #region Articulo

        #endregion


        #region Cliente
        public async Task<IActionResult> ListarCliente()
        {
            var apiUrl = "Cliente/Lista";
            var result = await _metodosApis.GetAsync<Response<List<Cliente>>>(apiUrl);
            return Json(result);
        }

        #endregion


        #region Cotizacion

        public async Task<IActionResult> BuscarCotizacion()
        {
            var apiUrl = "Cotizacion/Lista";
            var result = await _metodosApis.GetAsync<Response<List<CotizacionBuscar>>>(apiUrl);
            return Json(result);
        }

       

        #endregion

        #region Producto

        #endregion


        #region Regla

        public async Task<IActionResult> ObtenerReglas()
        {
            var apiUrl = "Regla/Lista";
            var result = await _metodosApis.GetAsync<Response<List<Regla>>>(apiUrl);
            return Json(result);
        }

        #endregion

    }
}
