using SoftkitWeb.Utilitarios;
 
var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddControllersWithViews()
 .AddJsonOptions(options =>
  {
      options.JsonSerializerOptions.PropertyNamingPolicy = null; // Otra opción es JsonNamingPolicy.Utf8
  });

// Invocando al URL Base del api
builder.Services.AddHttpClient<MetodosApis>(client =>
{
    var url = builder.Configuration.GetSection("ApiUrl:BaseURL").Value ?? "";
    client.BaseAddress = new Uri(url);
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

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Cotizador}/{action=Index}/{id?}");

app.Run();
