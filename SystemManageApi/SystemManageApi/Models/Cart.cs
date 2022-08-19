using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace SystemManageApi.Models
{
    public class Cart
    {

        [Key]
        public int CartID { get; set; }



        public int RoomNumber { get; set; }

        public int PricePerItem { get; set; }

        public int TotalPrice { get; set; }

        public int NumberofItems { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string FoodsimageName { get; set; }

        [NotMapped]
        public IFormFile FoodsimageFile { get; set; }

        [NotMapped]
        public string FoodsimageSrc { get; set; }

    }
}
