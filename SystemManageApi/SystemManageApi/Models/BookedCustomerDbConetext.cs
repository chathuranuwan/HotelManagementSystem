using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SystemManageApi.Models
{
    public class BookedCustomerDbContext : DbContext
    {
        public BookedCustomerDbContext(DbContextOptions<BookedCustomerDbContext> options) : base(options)
        {

        }
        public DbSet<BookedCustomer> BookedCustomers { get; set; }
    }
}
