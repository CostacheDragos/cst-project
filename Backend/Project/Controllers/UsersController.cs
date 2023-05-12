using Core.Dtos;
using Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private UserService userService { get; set; }

        public UsersController(UserService userService)
        {
            this.userService = userService;
        }

        /// <summary>
        /// Register user
        /// </summary>
        /// <param name="registerData"></param>
        /// <returns></returns>
        [HttpPost("register")]
        [AllowAnonymous]
        public IActionResult Register([FromBody] UserRegisterDTO registerData)
        {
            if (registerData == null)
            {
                return BadRequest();
            }
            var jwtToken = userService.Register(registerData);
            if (jwtToken == null)
            {
                return BadRequest();
            }
            return Ok(new {token = jwtToken});
        }


        /// <summary>
        /// Login user
        /// </summary>
        /// <param name="payload"></param>
        /// <returns></returns>
        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Login([FromBody] UserLoginDTO payload)
        {
            var jwtToken = userService.Validate(payload);
            if (jwtToken == null)
            {
                return Unauthorized();
            }
            return Ok(new {token = jwtToken});
        }


    }
}
