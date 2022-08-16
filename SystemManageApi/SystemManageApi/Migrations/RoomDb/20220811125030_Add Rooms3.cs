using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.RoomDb
{
    public partial class AddRooms3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "status",
                table: "Rooms",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "roomNo",
                table: "Rooms",
                newName: "RoomNo");

            migrationBuilder.RenameColumn(
                name: "floor",
                table: "Rooms",
                newName: "Floor");

            migrationBuilder.RenameColumn(
                name: "category",
                table: "Rooms",
                newName: "Category");

            migrationBuilder.AddColumn<string>(
                name: "ImageName",
                table: "Rooms",
                type: "nvarchar(20)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageName",
                table: "Rooms");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Rooms",
                newName: "status");

            migrationBuilder.RenameColumn(
                name: "RoomNo",
                table: "Rooms",
                newName: "roomNo");

            migrationBuilder.RenameColumn(
                name: "Floor",
                table: "Rooms",
                newName: "floor");

            migrationBuilder.RenameColumn(
                name: "Category",
                table: "Rooms",
                newName: "category");
        }
    }
}
