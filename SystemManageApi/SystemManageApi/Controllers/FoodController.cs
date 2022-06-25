using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SystemManageApi.Authentication;
using SystemManageApi.Models;
using Microsoft.Extensions.Logging;



namespace SystemManageApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        private readonly FoodDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public FoodController(FoodDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Vehicle
        [HttpGet]


        public async Task<ActionResult<IEnumerable<Food>>> GetFoods()
        {
            return await _context.Foods
                .Select(x => new Food()
                {
                    FoodID = x.FoodID,
                    FoodCategory = x.FoodCategory,
                    NameOfFood = x.NameOfFood,
                    Availability = x.Availability,
                    FoodDescription = x.FoodDescription,
                    PricePerItem = x.PricePerItem,
                    ImageName = x.ImageName,

                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)

                })

                .ToListAsync();
        }

        // GET: api/Vehicle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Food>> GetFood(int id)
        {
            var food = await _context.Foods.FindAsync(id);

            if (food == null)
            {
                return NotFound();
            }

            return food;
        }

        // PUT: api/Foods/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicle(int id, [FromForm] Food food)
        {
            if (id != food.FoodID)
            {
                return BadRequest();
            }

            if (food.ImageFile != null)
            {
                DeleteImage(food.ImageName);
                food.ImageName = await SaveImage(food.ImageFile);
            }

            _context.Entry(food).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Food
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Food>> PostVehicle([FromForm] Food food)
        {
            food.ImageName = await SaveImage(food.ImageFile);
            _context.Foods.Add(food);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Food/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Food>> DeleteFood(int id)
        {
            var food = await _context.Foods.FindAsync(id);
            if (food == null)
            {
                return NotFound();
            }
            DeleteImage(food.ImageName);
            _context.Foods.Remove(food);
            await _context.SaveChangesAsync();

            return food;
        }

        private bool FoodExists(int id)
        {
            return _context.Foods.Any(e => e.FoodID == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }

            return imageName;
        }
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);

        }
    }

}