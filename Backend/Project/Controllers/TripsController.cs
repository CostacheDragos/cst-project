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
        [HttpGet("getById")]
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
        [HttpPost("create")]
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


        /// <summary>
        /// Delete trip
        /// </summary>
        /// <param name="tripDeletionDTO"></param>
        /// <returns></returns>
        [HttpDelete("delete")]
        [Authorize(Roles = "User")]
        public IActionResult Delete([FromBody] TripDeletionDTO tripDeletionDTO)
        {
            var result = tripService.Delete(tripDeletionDTO.TripId);
            if (result == true)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut("edit")]
        [Authorize(Roles = "User")]
        public IActionResult Edit([FromBody] TripEditingDTO tripEditingDTO)
        {
            var result = tripService.Edit(tripEditingDTO);
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
