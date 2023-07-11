using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DemandApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DemandApi.Controllers
{
    public class DisplayForAdminController:BaseApiController
    {
        private readonly DemandAndSupplyDbContext _context;
        public DisplayForAdminController(DemandAndSupplyDbContext context )
        {
            _context = context;
            
        }

        [HttpGet ("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var demand = await  _context.DemandAndSupplyTbls.ToListAsync();
            return Ok(demand);
        }

    }
}