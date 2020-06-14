using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Domain.Services;
using kellesbeautyhome.Extensions;
using kellesbeautyhome.Resources;
using Microsoft.AspNetCore.Mvc;


namespace kellesbeautyhome.Controllers
{
    [Route("/api/[controller]")]
    public class ReservationsController : Controller
    {
        private readonly IReservationService reservationService;
        private readonly IMapper mapper;

        public ReservationsController(IReservationService reservationService, IMapper mapper)
        {
            this.reservationService = reservationService;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<ReservationResource>> ListAsync()
        {
            var reservations = await reservationService.ListAsync();
            var resources = mapper.Map<IEnumerable<Reservation>, IEnumerable<ReservationResource>>(reservations);
            return resources;
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] SaveReservationResource resource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            var reservation = mapper.Map<SaveReservationResource, Reservation>(resource);
            var result = await reservationService.SaveAsync(reservation);

            if (!result.Success)
                return BadRequest(result.Message);

            var reservationResource = mapper.Map<Reservation, ReservationResource>(result.Reservation);
            return Ok(reservationResource);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] SaveReservationResource resource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            var reservation = mapper.Map<SaveReservationResource, Reservation>(resource);
            var result = await reservationService.UpdateAsync(id, reservation);

            if (!result.Success)
                return BadRequest(result.Message);

            var reservationResource = mapper.Map<Reservation, ReservationResource>(result.Reservation);
            return Ok(reservationResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await reservationService.DeleteAsync(id);

            if (!result.Success)
                return BadRequest(result.Message);

            var packageResource = mapper.Map<Reservation, ReservationResource>(result.Reservation);
            return Ok(packageResource);
        }
    }
}