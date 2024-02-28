using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SoftkitWeb.Models;
using System.Security.Claims;

namespace SoftkitWeb.Controllers
{
    public class AccountController : Controller
    {


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
                var token = "dasdasdsad";// await _authApiClient.LoginAsync(model.Username, model.Password);
                if (token != null)
                {
                    // Guardar el token en las cookies
                    var claims = new List<Claim>
                    {
                        // Agregar el claim deseado al token
                        //new Claim("CustomClaimName", "CustomClaimValue"),
                        // También puedes agregar otros claims si es necesario
                        
                        new Claim(ClaimTypes.Sid, "1"),
                        new Claim(ClaimTypes.Name, "David Yupanqui"),
                        new Claim(ClaimTypes.Role, "Admin") 
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
