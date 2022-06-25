using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.CustomerDb
{
    public partial class CustomerInformations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VeimageName",
                table: "Customers",
                newName: "FoodimageName");

            migrationBuilder.RenameColumn(
                name: "NumberOfday",
                table: "Customers",
                newName: "NumberOfItems");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NumberOfItems",
                table: "Customers",
                newName: "NumberOfday");

            migrationBuilder.RenameColumn(
                name: "FoodimageName",
                table: "Customers",
                newName: "VeimageName");
        }
    }
}
