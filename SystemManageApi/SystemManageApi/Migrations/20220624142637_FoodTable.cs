using Microsoft.EntityFrameworkCore.Migrations;

namespace SystemManageApi.Migrations
{
    public partial class FoodTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Foods",
                columns: table => new
                {
                    FoodID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FoodCategory = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    NameOfFood = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Availability = table.Column<int>(type: "int", nullable: false),
                    FoodDescription = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    PricePerItem = table.Column<int>(type: "int", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Foods", x => x.FoodID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Foods");
        }
    }
}
