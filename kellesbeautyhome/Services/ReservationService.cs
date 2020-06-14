using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using kellesbeautyhome.Domain.Models;
using kellesbeautyhome.Domain.Repositories;
using kellesbeautyhome.Domain.Services;
using kellesbeautyhome.Domain.Services.Communication;
using Microsoft.Extensions.Caching.Memory;

namespace kellesbeautyhome.Services
{
    public class ReservationService : IReservationService
    {
        private readonly IReservationRepository reservationRepository;
        private readonly IPackageRepository packageRepository;
        private readonly IUnitOfWork unitOfWork;

        public ReservationService(IReservationRepository reservationRepository, IPackageRepository packageRepository, IUnitOfWork unitOfWork)
        {
            this.reservationRepository = reservationRepository;
            this.packageRepository = packageRepository;
            this.unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Reservation>> ListAsync()
        {
            return await reservationRepository.ListAsync();
        }

        public async Task<ReservationResponse> SaveAsync(Reservation reservation)
        {
            try
            {

                var existingPackage = await packageRepository.FindByIdAsync(reservation.Packageid);
                if (existingPackage == null)
                    return new ReservationResponse("Invalid package.");

                await reservationRepository.AddAsync(reservation);
                await unitOfWork.CompleteAsync();

                return new ReservationResponse(reservation);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new ReservationResponse($"An error occurred when saving the reservation: {ex.Message}");
            }
        }

        public async Task<ReservationResponse> UpdateAsync(int id, Reservation reservation)
        {
            var existingReservation = await reservationRepository.FindByIdAsync(id);

            if (existingReservation == null)
                return new ReservationResponse("Reservation not found.");

            var existingPackage = await packageRepository.FindByIdAsync(reservation.Packageid);
            if (existingPackage == null)
                return new ReservationResponse("Invalid package.");

            existingReservation.name = reservation.name;
            existingReservation.ReservationDate = reservation.ReservationDate;
            existingReservation.ReservationTime = reservation.ReservationTime;
            existingReservation.Address = reservation.Address;
            existingReservation.Packageid = reservation.Packageid;

            try
            {
                reservationRepository.Update(existingReservation);
                await unitOfWork.CompleteAsync();

                return new ReservationResponse(existingReservation);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new ReservationResponse($"An error occurred when updating the reservation: {ex.Message}");
            }
        }

        public async Task<ReservationResponse> DeleteAsync(int id)
        {
            var existingReservation = await reservationRepository.FindByIdAsync(id);

            if (existingReservation == null)
                return new ReservationResponse("Reservation not found.");

            try
            {
                reservationRepository.Remove(existingReservation);
                await unitOfWork.CompleteAsync();

                return new ReservationResponse(existingReservation);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new ReservationResponse($"An error occurred when deleting the reservation: {ex.Message}");
            }
        }
    }
}