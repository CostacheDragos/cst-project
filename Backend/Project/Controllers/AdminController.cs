using Core.Dtos;
using Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private UserService userService { get; set; }
        private TripService tripService { get; set; }

        public AdminController(UserService userService, TripService tripService)
        {
            this.userService = userService;
            this.tripService = tripService;
        }

        /// <summary>
        /// Get all users
        /// </summary>
        /// <returns></returns>
        [HttpGet("getAllUsers")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetAllUsers()
        {
            var result = userService.GetAll();
            if (result == null)
                return NoContent();
            return Ok(result);
        }


        /// <summary>
        /// Get everyone's trips
        /// </summary>
        /// <returns></returns>
        [HttpGet("getAllTrips")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetAllTrips()
        {
            var result = tripService.GetAll();
            if (result == null) 
                return NoContent();
            return Ok(result);
        }

        /// <summary>
        /// Delete user by id
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpDelete("deleteUser")]
        [Authorize(Roles = "Admin")]
        public IActionResult Delete(int userId)
        {
            var result = userService.Delete(userId);
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
