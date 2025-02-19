using Microsoft.AspNetCore.Mvc;

namespace VitaeVista.Api.Controllers
{
    [ApiController]
    [Route("api/test")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "VitaeVista API is working!" });
        }
    }
}