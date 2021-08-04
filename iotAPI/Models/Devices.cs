using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using System.Linq;
using System.Threading.Tasks;

namespace iotAPI.Models
{
    public class Devices
    {

        
        
        [Key]
        public int ID { get; set; }

        public string UserName { get; set; }

        public string deviceType { get; set; }
        
        public string deviceDataUrl { get; set; }


    }
}
