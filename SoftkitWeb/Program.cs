using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using SoftkitWeb.Core.Filter;
using SoftkitWeb.Utilitarios;
 
var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddControllersWithViews(options => {
    options.Filters.Add(new ServiceFilterAttribute(typeof(CustomAuthorizationFilter)));
})
 .AddJsonOptions(options =>
  {
      options.JsonSerializerOptions.PropertyNamingPolicy = null; // Otra opci�n es JsonNamingPolicy.Utf8
  });

// Invocando al URL Base del api
builder.Services.AddHttpClient<MetodosApis>(client =>
{
    var url = builder.Configuration.GetSection("ApiUrl:BaseURL").Value ?? "";
    client.BaseAddress = new Uri(url);
});

builder.Services.AddScoped<CustomAuthorizationFilter>();
// Configuraci�n de la autenticaci�n
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
})
.AddCookie(options =>
{
    options.LoginPath = "/Account/Login"; // La ruta a la p�gina de inicio de sesi�n
    options.AccessDeniedPath = "/Account/AccessDenied"; // La ruta a la p�gina de acceso denegado
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseAuthentication();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Cotizador}/{action=Index}/{id?}");

app.Run();
