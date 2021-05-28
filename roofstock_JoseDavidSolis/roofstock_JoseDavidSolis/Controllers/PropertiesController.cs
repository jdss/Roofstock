using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using roofstock_JoseDavidSolis.Models;

namespace roofstock_JoseDavidSolis.Controllers
{
    public class PropertiesController : Controller
    {
        private readonly roofstock_JoseDavidSolisContext _context;

        public PropertiesController(roofstock_JoseDavidSolisContext context)
        {
            _context = context;
        }


        [HttpPost]
        public async Task<IActionResult> AddProperty([FromBody] Property objProperty)
        {
            try
            {
                _context.Add(objProperty);
                await _context.SaveChangesAsync();
                return Json(true);
            }
            catch
            {
                return Json(false);
            }
            
        }


        public async Task<IActionResult> GetProperties()
        {
            return Json(await _context.Properties.ToListAsync());
        }


    }
}
