using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace roofstock_JoseDavidSolis.Models
{
    public partial class roofstock_JoseDavidSolisContext : DbContext
    {
        public roofstock_JoseDavidSolisContext()
        {
        }

        public roofstock_JoseDavidSolisContext(DbContextOptions<roofstock_JoseDavidSolisContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Property> Properties { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Property>(entity =>
            {
                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.ListPrice)
                    .HasColumnType("decimal(18, 2)")
                    .HasColumnName("LIST_PRICE");

                entity.Property(e => e.MonthlyRent)
                    .HasColumnType("decimal(18, 2)")
                    .HasColumnName("MONTHLY_RENT");

                entity.Property(e => e.YearBuilt).HasColumnName("YEAR_BUILT");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
