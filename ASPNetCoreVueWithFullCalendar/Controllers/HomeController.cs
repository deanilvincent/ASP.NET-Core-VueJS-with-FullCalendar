using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ASPNetCoreVueWithFullCalendar.Models;
using Microsoft.CodeAnalysis;

namespace ASPNetCoreVueWithFullCalendar.Controllers
{
    public class Event
    {
        public int id { get; set; }
        public string title { get; set; }
        public string start { get; set; }
        public string end { get; set; }
        public bool allDay { get; set; }
        public bool editable { get; set; }
    }

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> GetEvents()
        {
            var events = new List<Event>
            {
                new Event{id = 0,title = "Event 1",start = $"{DateTime.Now:yyyy-MM-dd HH:mm:ss}",end = $"{DateTime.Now.AddHours(1):yyyy-MM-dd HH:mm:ss}", allDay = false, editable = true}
            };

            return await Task.FromResult(Json(events));
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
