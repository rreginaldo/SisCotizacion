using RESTAPI_CORE.Modelos;
using System.Net.Http;
using System.Text.Json;

namespace SoftkitWeb.Utilitarios
{
    public class MetodosApis
    {
        private readonly HttpClient _httpClient;

        public MetodosApis(HttpClient httpClient)
        {
            _httpClient = httpClient ?? throw new ArgumentNullException(nameof(httpClient));
        }

        public async Task<T> GetAsync<T>(string apiUrl)
        {

            var response = await _httpClient.GetAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                var responseData = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<T>(responseData) ?? default!;

                return result;
            }
            throw new InvalidOperationException($"Error al realizar la solicitud GET: {response.StatusCode}");

        }

        public async Task<T> PostAsync<T>(string apiUrl, object data)
        {
            var response = await _httpClient.PostAsJsonAsync(apiUrl, data);

            if (response.IsSuccessStatusCode)
            {
                var responseData = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<T>(responseData) ?? default!;

                return result;
            }

            throw new InvalidOperationException($"Error al realizar la solicitud POST: {response.StatusCode}");
        }

        public async Task<T> PutAsync<T>(string apiUrl, object data)
        {
            var response = await _httpClient.PutAsJsonAsync(apiUrl, data);

            if (response.IsSuccessStatusCode)
            {
                var responseData = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<T>(responseData) ?? default!;

                return result;
            }

            throw new InvalidOperationException($"Error al realizar la solicitud PUT: {response.StatusCode}");
        }

        public async Task<bool> DeleteAsync(string apiUrl)
        {
            var response = await _httpClient.DeleteAsync(apiUrl);

            if (response.IsSuccessStatusCode)
            {
                return true;
            }

            throw new InvalidOperationException($"Error al realizar la solicitud DELETE: {response.StatusCode}");
        }

    }
}
