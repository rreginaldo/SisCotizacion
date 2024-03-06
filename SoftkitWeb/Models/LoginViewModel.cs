using System.ComponentModel.DataAnnotations;

namespace SoftkitWeb.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Por favor ingresa tu correo.")] 
        [Display(Name = "Correo")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Por favor ingresa tu contraseña.")]
        [DataType(DataType.Password)]
        [Display(Name = "Contraseña")]
        public string Password { get; set; }
    }
}
