using SoftkitWeb.Models;

namespace RESTAPI_CORE.Modelos
{
    public class Response<T>
    {
        public ResponseType? InternalStatus { get; set; }
        public T? Data { get; set; } 
        public string? Mensaje { get; set; }
 
    }

}
