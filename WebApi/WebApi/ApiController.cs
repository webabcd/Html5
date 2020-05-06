// 长连接 https://www.cnblogs.com/TianFang/p/8502770.html，客户端断了，服务也要断，这是要自己写逻辑的

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace WebApi
{
    public class ApiController : Controller
    {
        [Route("test")]
        public IActionResult Test()
        {
            return Content("post", "text/plain", Encoding.UTF8);
        }

        [Route("get_long")]
        public async Task GetLong()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            Response.Headers.Add("Access-Control-Allow-Headers", "*");
            Response.Headers.Add("Access-Control-Request-Method", "*");
            Response.Headers.Add("Access-Control-Expose-Headers", "*");

            Response.ContentType = "text/html";
            Response.StatusCode = 200;
            Response.ContentLength = 10;

            for (int i = 0; i < 10; i++)
            {
                await Task.Delay(10);

                var content = "a";
                var data = Encoding.UTF8.GetBytes(content);
                await Response.Body.WriteAsync(data, 0, data.Length);
                await Response.Body.FlushAsync();
            }
        }
    }
}
