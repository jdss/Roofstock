using System;
using System.Collections.Generic;

#nullable disable

namespace roofstock_JoseDavidSolis.Models
{
    public partial class Property
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int? YearBuilt { get; set; }
        public decimal? ListPrice { get; set; }
        public decimal? MonthlyRent { get; set; }
    }
}
