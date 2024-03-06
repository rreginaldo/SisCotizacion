using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RESTAPI_CORE.Modelos;
using SoftkitWeb.Models;
using SoftkitWeb.Utilitarios;
using System.Security.Claims;

namespace SoftkitWeb.Controllers
{
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;
        private readonly MetodosApis _metodosApis;

        public AccountController(ILogger<AccountController> logger, MetodosApis metodosApis)
        {
            _logger = logger;
            _metodosApis = metodosApis;
        }


        [HttpGet]
        [AllowAnonymous]
        public IActionResult Login(string returnUrl)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            if (ModelState.IsValid)
            { 
                var apiUrl = $"Usuario/LoginUsuario?correo={model.UserName}&clave={model.Password}";
                var token = await _metodosApis.GetAsync<Response<Usuario>>(apiUrl);

                if (token != null)
                {
                    var credenciales = token.Data;
                    // Guardar el token en las cookies
                    var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Sid, credenciales.id.ToString() ?? ""),
                        new Claim(ClaimTypes.Name, credenciales.nombre ?? ""),
                        new Claim(ClaimTypes.Role, credenciales.rol ?? "")
                     };

                    var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                    var authProperties = new AuthenticationProperties();
                    authProperties.IsPersistent = true;
                    authProperties.ExpiresUtc = DateTime.UtcNow.AddMinutes(60);
                    authProperties.AllowRefresh = true;
                    await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);

                    // Redirigir al returnUrl si está definido
                    if (!string.IsNullOrEmpty(returnUrl))
                    {
                        return LocalRedirect(returnUrl);
                    }
                    return RedirectToAction("Index", "Home");
                }
                ModelState.AddModelError(string.Empty, "Usuario o contraseña invalido.");
            }
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return RedirectToAction("Login", "Account");
        }


        public IActionResult AccessDenied()
        {
            return View();
        }

    }
}
