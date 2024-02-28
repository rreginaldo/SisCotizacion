using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace SoftkitWeb.Core.Filter
{
    public class CustomAuthorizationFilter : IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            // Verificar si el usuario está autenticado
            if (!context.HttpContext.User.Identity.IsAuthenticated)
            {
                // Verificar si el returnUrl es para la página de inicio de sesión misma
                if (context.HttpContext.Request.Path != "/Account/Login")
                {
                    // Redirigir al usuario a la página de inicio de sesión
                    context.Result = new RedirectToActionResult("Login", "Account", new { returnUrl = context.HttpContext.Request.Path });
                }
            }
        }
    }
}
