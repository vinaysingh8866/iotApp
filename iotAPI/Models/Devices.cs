using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace iotAPI.Models
{
    public class Devices
    {
        [Key]
        [HiddenInput]
        public int ID { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string deviceType { get; set; }
        [Required]
        public string deviceDataUrl { get; set; }


    }
}
