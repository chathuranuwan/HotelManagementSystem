using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.CartDb
{
    public partial class Addroomnumbercolomn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RoomNumber",
                table: "Carts",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RoomNumber",
                table: "Carts");
        }
    }
}
