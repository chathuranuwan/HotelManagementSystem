using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.CartDb
{
    public partial class CartInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VehimageName",
                table: "Carts",
                newName: "FoodsimageName");

            migrationBuilder.RenameColumn(
                name: "PricePerday",
                table: "Carts",
                newName: "PricePerItem");

            migrationBuilder.RenameColumn(
                name: "NumberofDays",
                table: "Carts",
                newName: "NumberofItems");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PricePerItem",
                table: "Carts",
                newName: "PricePerday");

            migrationBuilder.RenameColumn(
                name: "NumberofItems",
                table: "Carts",
                newName: "NumberofDays");

            migrationBuilder.RenameColumn(
                name: "FoodsimageName",
                table: "Carts",
                newName: "VehimageName");
        }
    }
}
