using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace SystemManageApi.Models
{
    public class Room
    {
        [Key]
        public int RoomID { get; set; }

        public int RoomNumber { get; set; }

        public int Floor { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Category { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string Status { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }
    } 
}
