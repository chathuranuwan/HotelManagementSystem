using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations.RoomDb
{
    public partial class Rom3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RoomNo",
                table: "Rooms",
                newName: "RoomNumber");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Rooms",
                newName: "RoomID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RoomNumber",
                table: "Rooms",
                newName: "RoomNo");

            migrationBuilder.RenameColumn(
                name: "RoomID",
                table: "Rooms",
                newName: "ID");
        }
    }
}
