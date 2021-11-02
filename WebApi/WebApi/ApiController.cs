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
    [Route("hello")]
    public IActionResult Hello()
    {
      return Content("hello webabcd", "text/plain", Encoding.UTF8);
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

    [Route("jsonp")]
    public IActionResult Jsonp(string jsoncallback)
    {
      return Content(jsoncallback + "('hello jsonp');", "text/plain", Encoding.UTF8);
    }

    [Route("redirect")]
    public IActionResult Redirect()
    {
      return Redirect("https://www.cnblogs.com/webabcd/");
    }

    [Route("fetch")]
    public IActionResult Fetch()
    {
      Response.Headers.Add("Access-Control-Allow-Origin", "*");
      Response.Headers.Add("Access-Control-Allow-Headers", "*");

      return Content("{ \"name\": \"webabcd\" }", "application/json", Encoding.UTF8);
    }
  }
}
