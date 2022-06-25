using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace SystemManageApi.Models
{
    public class Food
    {
        [Key]
        public int FoodID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string FoodCategory { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string NameOfFood { get; set; }

        public int Availability { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string FoodDescription { get; set; }

        public int PricePerItem { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
    }
}
