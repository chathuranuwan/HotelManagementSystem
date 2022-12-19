using Microsoft.AspNetCore.Http;
using Microsoft.OData.Edm;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SystemManageApi.Models
{
    public class BookedCustomer
    {
        [Key]
        public int CustomerID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string EmailAddress { get; set; }

        public int MobileNumber { get; set; }

        public string StartingDate { get; set; }

        public int NumberOfDays { get; set; }

        public int TotalPrice { get; set; }


        [NotMapped]
        public IFormFile RoomimageFile { get; set; }

        [NotMapped]

        public string RoomimageSrc { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        public string RoomimageName { get; set; }




    }
}
