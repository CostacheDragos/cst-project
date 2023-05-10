using DataLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Dtos
{
    public class TripDto
    {
        public int UserId { get; set; }
        public UserDto User { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public DateTime Date { get; set; }
        public int Spending { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
    }
}
