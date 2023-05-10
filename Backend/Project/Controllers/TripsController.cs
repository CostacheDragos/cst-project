using Core.Dtos;
using Core.Services;
using DataLayer.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripsController : ControllerBase
    {
        private TripService tripService { get; set; }

        public TripsController(TripService tripService)
        {
            this.tripService = tripService;
        }

        /// <summary>
        /// Get Trip by id
        /// </summary>
        /// <param name="tripId"></param>
        /// <returns></returns>
        [HttpGet("getTripById")]
        [Authorize(Roles = "User")]
        public IActionResult GetById(int tripId)
        {
            var result = tripService.GetById(tripId);
            if(result ==null)
                return NotFound();
            return Ok(result);
        }


        /// <summary>
        /// Create trip
        /// </summary>
        /// <param name="tripCreationDTO"></param>
        /// <returns></returns>
        [HttpPost("createTrip")]
        [Authorize(Roles = "User")]
        public IActionResult Create([FromBody] TripCreationDTO tripCreationDTO)
        {
            var result = tripService.Create(tripCreationDTO);
            if (result == true)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        
    }
}
