using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SystemManageApi.Models
{
    public class Customer
    {
        
        public int CustomerID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string UserNumber { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string LastName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string EmailAddress { get; set; }

        public int MobileNumber { get; set; }

        public int RoomNumber { get; set; }

        public int NumberOfItems { get; set; }

        public int TotalPrice { get; set; }


        [NotMapped]
        public IFormFile FoodimageFile { get; set; }

        [NotMapped]

        public string FoodimageSrc { get; set; }

   
        [Column(TypeName = "nvarchar(100)")]
        public string FoodimageName { get; set; }

        public bool status { get; set; }

       


    }
}
