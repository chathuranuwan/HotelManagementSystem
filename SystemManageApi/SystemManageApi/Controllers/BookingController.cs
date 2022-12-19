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
    public class BookingController : ControllerBase
    {
        private readonly BookingDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;


        public BookingController(BookingDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Booking
        [HttpGet]


        public async Task<ActionResult<IEnumerable<Booking>>> GetBookings()
        {
            return await _context.Bookings
                .Select(x => new Booking()
                {
                    BookingID = x.BookingID,
                    RoomCategory = x.RoomCategory,
                    PricePerDay = x.PricePerDay,
                    NumberofDays = x.NumberofDays,
                    TotalPrice = x.TotalPrice,
                    RoomsimageName = x.RoomsimageName,
                    RoomsimageSrc = String.Format("{0}://{1}{2}/Images2/{3}", Request.Scheme, Request.Host, Request.PathBase, x.RoomsimageName)

                })

                .ToListAsync();
        }

        // GET: api/Booking/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Booking>> GetBooking(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);

            if (booking == null)
            {
                return NotFound();
            }

            return booking;
        }



        // POST: api/Booking

        [HttpPost]
        public async Task<ActionResult<Booking>> PostBooking([FromForm] Booking booking)
        {

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/Booking/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Booking>> DeleteBooking(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null)
            {
                return NotFound();
            }
            DeleteImage(booking.RoomsimageName);
            _context.Bookings.Remove(booking);
            await _context.SaveChangesAsync();

            return booking;
        }

        private bool BookingExists(int id)
        {
            return _context.Bookings.Any(e => e.BookingID == id);
        }


        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images2", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);

        }
    }

}