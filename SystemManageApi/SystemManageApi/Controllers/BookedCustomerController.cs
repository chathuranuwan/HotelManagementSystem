using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SystemManageApi.Models;

namespace SystemManageApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookedCustomerController : ControllerBase
    {
        private readonly BookedCustomerDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public BookedCustomerController(BookedCustomerDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/BookedCustomer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookedCustomer>>> GetBookedCustomers()
        {
            return await _context.BookedCustomers
            .Select(x => new BookedCustomer()
            {
                CustomerID = x.CustomerID,
                FirstName = x.FirstName,
                LastName = x.LastName,
                EmailAddress = x.EmailAddress,
                MobileNumber = x.MobileNumber,
                StartingDate = x.StartingDate,
                NumberOfDays = x.NumberOfDays,
                TotalPrice = x.TotalPrice,
                RoomimageSrc = String.Format("{3}", Request.Scheme, Request.Host, Request.PathBase, x.RoomimageName)

            })

                .ToListAsync();
        }

        // GET: api/BookedCustomer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BookedCustomer>> GetBookedCustomer(int id)
        {
            var bookedCustomer = await _context.BookedCustomers.FindAsync(id);

            if (bookedCustomer == null)
            {
                return NotFound();
            }

            return bookedCustomer;
        }

        // PUT: api/BookedCustomer/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookedCustomer(int id, BookedCustomer bookedCustomer)
        {
            if (id != bookedCustomer.CustomerID)
            {
                return BadRequest();
            }

            _context.Entry(bookedCustomer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookedCustomerExists(id))
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

        // POST: api/BookedCustomer
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BookedCustomer>> PostBookedCustomer([FromForm] BookedCustomer bookedCustomer)
        {

            _context.BookedCustomers.Add(bookedCustomer);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // DELETE: api/BookedCustomer/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBookedCustomer(int id)
        {
            var bookedCustomer = await _context.BookedCustomers.FindAsync(id);
            if (bookedCustomer == null)
            {
                return NotFound();
            }

            _context.BookedCustomers.Remove(bookedCustomer);
            await _context.SaveChangesAsync();

            return NoContent();
        }






        private bool BookedCustomerExists(int id)
        {
            return _context.BookedCustomers.Any(e => e.CustomerID == id);
        }
    }
}
