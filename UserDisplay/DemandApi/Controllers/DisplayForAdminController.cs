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

        [HttpGet ("GetByPositionId/{id}")]
        public async Task<ActionResult<IEnumerable<DemandAndSupplyTbl>>> GetByPositionId( string id)
        {
            var demand = await _context.DemandAndSupplyTbls.FirstOrDefaultAsync( x =>x.PositionId == id);
            return Ok(demand);     
        }

    }
}