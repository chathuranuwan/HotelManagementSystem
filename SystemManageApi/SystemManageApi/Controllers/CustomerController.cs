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
    public class CustomerController : ControllerBase
    {
        private readonly CustomerDbContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public CustomerController(CustomerDbContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }

        // GET: api/Customer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return await _context.Customers
            .Select(x => new Customer()
             {
                 CustomerID = x.CustomerID,
                UserNumber = x.UserNumber,
                 FirstName = x.FirstName,
                 LastName = x.LastName,
                 EmailAddress = x.EmailAddress,
                 MobileNumber = x.MobileNumber,
                RoomNumber = x.RoomNumber,
                NumberOfItems =x.NumberOfItems,
                 TotalPrice  =x.TotalPrice,
                 status=false,
                FoodimageSrc = String.Format("{3}", Request.Scheme, Request.Host, Request.PathBase, x.FoodimageName)

            })

                .ToListAsync();
        }

        // GET: api/Customer/5
        [HttpGet("{id}")]
        public async Task<IQueryable<Customer>> GetCustomer(String id)
        {
            var customer = _context.Customers.Where(asd=>asd.UserNumber == id);

            if (customer == null)
            {
                return (IQueryable<Customer>)NotFound();
            }

            return customer;
        }

        // PUT: api/Customer/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    

        // POST: api/Customer
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer([FromForm]Customer customer)
        {
           
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }


        



        // DELETE: api/Customer/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        



      
    }
}
