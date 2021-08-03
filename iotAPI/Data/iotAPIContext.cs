using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using iotAPI.Models;

namespace iotAPI.Data
{
    public class iotAPIContext : DbContext
    {
        public iotAPIContext (DbContextOptions<iotAPIContext> options)
            : base(options)
        {
        }

        public DbSet<iotAPI.Models.Devices> Devices { get; set; }
    }
}
