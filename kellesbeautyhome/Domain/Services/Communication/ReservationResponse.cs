using kellesbeautyhome.Domain.Models;

namespace kellesbeautyhome.Domain.Services.Communication
{
    public class ReservationResponse : BaseResponse
    {
        public Reservation Reservation { get; private set; }

        private ReservationResponse(bool success, string message, Reservation reservation) : base(success, message)
        {
            Reservation = reservation;
        }

        public ReservationResponse(Reservation reservation) : this(true, string.Empty, reservation) { }

        public ReservationResponse(string message) : this(false, message, null) { }
    }
}