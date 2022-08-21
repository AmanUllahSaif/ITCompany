using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Wisconsys.UI.Models
{
    public class ContactModel
    {
        [Display(Name="Your Name")]
        [Required(ErrorMessage ="This field is required.")]
        public string Name { get; set; }

        [Display(Name="Your E-mail")]
        [Required(ErrorMessage ="This field is required.")]
        [EmailAddress(ErrorMessage ="Invalid Email address")]
        public string Email { get; set; }

        [Display(Name="Subject")]
        [Required(ErrorMessage ="This field is required.")]
        public string Subject { get; set; }

        [Display(Name = "Your Message")]
        [Required(ErrorMessage = "This field is required.")]
        public string Message { get; set; }
    }
}