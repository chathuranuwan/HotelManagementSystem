using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.RoomDb
{
    public partial class AddRooms2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "roomNo",
                table: "Rooms",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "roomNo",
                table: "Rooms");
        }
    }
}
