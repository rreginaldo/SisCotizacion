using Microsoft.AspNetCore.Mvc;
using RESTAPI_CORE.Modelos;
using SoftkitWeb.Models;
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

        #region Articulo
        [HttpPost]
        public async Task<IActionResult> ListarArticulos(string descripcion)
        {
            var apiUrl = string.Format("Articulo/ListaArticulo?descripcion={0}", descripcion ?? "");
            var result = await _metodosApis.GetAsync<Response<List<Articulo>>>(apiUrl);
            return Json(result);
        }

        #endregion

        #region Cliente
        [HttpGet]
        public async Task<IActionResult> ListarCliente()
        {
            var apiUrl = "Cliente/Lista";
            var result = await _metodosApis.GetAsync<Response<List<Cliente>>>(apiUrl);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> GuardarCliente([FromBody] Cliente obj)
        {
            var apiUrl = "Cliente/Guardar";
            var result = await _metodosApis.PostAsync<Response<string>>(apiUrl, obj);
            return Json(result);
        }

        [HttpPut]
        public async Task<IActionResult> EditarCliente([FromBody] Cliente obj)
        {
            var apiUrl = "Cliente/Editar";
            var result = await _metodosApis.PutAsync<Response<string>>(apiUrl, obj);
            return Json(result);
        }

        #endregion

        #region Cotizacion

        [HttpGet]
        public async Task<IActionResult> ListarCotizacion()
        {
            var apiUrl = "Cotizacion/Lista";
            var result = await _metodosApis.GetAsync<Response<List<CotizacionBuscar>>>(apiUrl);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> ObtenerCotizacion(int idcotizacion)
        {
            var apiUrl = string.Format("Cotizacion/Obtener/{0}", idcotizacion);
            var result = await _metodosApis.GetAsync<Response<List<Cotizacion>>>(apiUrl);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> KardexCotizacion(string codigo, string codcliente)
        {
            var apiUrl = string.Format("Cotizacion/KardexCotizacion?codigo={0}&codcliente={1}", codigo, codcliente);
            var result = await _metodosApis.GetAsync<Response<List<KardexCoti>>>(apiUrl);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> KardexVenta(string codigo, string codcliente)
        {
            var apiUrl = string.Format("Cotizacion/KardexVenta?codigo={0}&codcliente={1}", codigo, codcliente);
            var result = await _metodosApis.GetAsync<Response<List<KardexVenta>>>(apiUrl);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> KardexNotaIngreso(string codigo, string codcliente)
        {
            var apiUrl = string.Format("Cotizacion/KardexNotaIngreso?codigo={0}&codcliente={1}", codigo, codcliente);
            var result = await _metodosApis.GetAsync<Response<List<KardexNotaIngreso>>>(apiUrl);
            return Json(result);
        }

        [HttpGet]
        public async Task<IActionResult> SecuenciaCoti(int codigo)
        {
            var apiUrl = string.Format("Cotizacion/SecuenciaCoti?codigo={0}", codigo);
            var result = await _metodosApis.GetAsync<Response<int>>(apiUrl);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> GuardarCotizacion(List<Cotizacion> cotizaciones)
        {
            cotizaciones.ForEach(x => x.usuario = User.Identity.Name); 
            var apiUrl = "Cotizacion/Guardar";
            var result = await _metodosApis.PostAsync<Response<string>>(apiUrl, cotizaciones);
            return Json(result);
        }

        #endregion

        #region Producto
        [HttpGet]
        public async Task<IActionResult> ListarProducto()
        {
            var apiUrl = "Producto/Lista";
            var result = await _metodosApis.GetAsync<Response<List<Producto>>>(apiUrl);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> ObtenerProducto(int idProducto)
        {
            var apiUrl = string.Format("Producto/Obtener/{0}", idProducto);
            var result = await _metodosApis.GetAsync<Response<Producto>>(apiUrl);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> GuardarProducto([FromBody] Producto obj)
        {
            var apiUrl = "Producto/Guardar";
            var result = await _metodosApis.PostAsync<Response<string>>(apiUrl, obj);
            return Json(result);
        }

        [HttpPut]
        public async Task<IActionResult> EditarProducto([FromBody] Producto obj)
        {
            var apiUrl = "Producto/Editar";
            var result = await _metodosApis.PutAsync<Response<string>>(apiUrl, obj);
            return Json(result);
        }

        [HttpDelete]
        public async Task<IActionResult> EliminarProducto(int idProducto)
        {
            var apiUrl = string.Format("Producto/Eliminar/{0}", idProducto);
            var result = await _metodosApis.DeleteAsync<Response<string>>(apiUrl);
            return Json(result);
        }

        #endregion

        #region Proveedores 
        [HttpGet]
        public async Task<IActionResult> ListarProveedores()
        {
            var apiUrl = "Proveedor/Lista";
            var result = await _metodosApis.GetAsync<Response<List<Proveedor>>>(apiUrl);
            return Json(result);
        }
        #endregion

        #region Regla

        [HttpGet]
        public async Task<IActionResult> ObtenerReglas()
        {
            var apiUrl = "Regla/Lista";
            var result = await _metodosApis.GetAsync<Response<List<Regla>>>(apiUrl);
            return Json(result);
        }

        #endregion

    }
}
