using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace SystemManageApi.Models
{
    public class Booking
    {

        [Key]
        public int BookingID { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        public string RoomCategory { get; set; }

        public int PricePerDay { get; set; }

        public int TotalPrice { get; set; }

        public int NumberofDays { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string RoomsimageName { get; set; }

        [NotMapped]
        public IFormFile RoomsimageFile { get; set; }

        [NotMapped]
        public string RoomsimageSrc { get; set; }

    }
}
