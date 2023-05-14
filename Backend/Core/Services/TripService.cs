using Core.Dtos;
using Core.Exceptions;
using DataLayer;
using DataLayer.Dtos;
using DataLayer.Entities;
using DataLayer.Mapping;


namespace Core.Services
{
    public class TripService
    {
        private readonly UnitOfWork unitOfWork;

        public TripService(UnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public TripListingDTO GetById(int tripId)
        {
            var result = unitOfWork.Trips.GetById(tripId).ToTripListingDTO();
            if (result == null)
                throw new ResourceMissingException($"The trip with the id {tripId} does not exist!");

            return result;
        }

        public List<TripListingDTO> GetAll()
        {
            var result = unitOfWork.Trips.GetAll().ToTripListingDTOs();
            return result;
        }

        public List<TripListingDTO> GetAllByUserId(int userId)
        {
            var result = unitOfWork.Trips.GetAllByUserId(userId).ToTripListingDTOs();
            return result;
        }

        public TripListingDTO Create(TripCreationDTO tripCreationDTO)
        {
            if (tripCreationDTO == null) return null;

            var trip = new Trip {
                UserId = tripCreationDTO.UserId,
                Name = tripCreationDTO.Name,
                Country = tripCreationDTO.Country,
                // Parse string to DateTime
                Date = DateTime.ParseExact(tripCreationDTO.Date, "dd/MM/yyyy", null),
                Spending = tripCreationDTO.Spending,
                Rating = tripCreationDTO.Rating,
                Description = tripCreationDTO.Description,
            };

            unitOfWork.Trips.Insert(trip);
            unitOfWork.SaveChanges();

            // We want to return the whole trip back to the client
            // so we need to map it to a DTO
            var result = trip.ToTripListingDTO();

            return result;
        }

        public bool Delete(int tripId)
        {
            var trip = unitOfWork.Trips.GetById(tripId);
            if (trip == null) return false;
            unitOfWork.Trips.Remove(trip);
            unitOfWork.SaveChanges();
            return true;
        }

        public bool Edit(TripEditingDTO tripEditingDTO)
        {
            if (tripEditingDTO == null) return false;

            var trip = unitOfWork.Trips.GetById(tripEditingDTO.TripId);
            if (trip == null) return false;

            trip.Name = tripEditingDTO.Name;
            trip.Country = tripEditingDTO.Country;
            trip.Date = DateTime.Parse(tripEditingDTO.Date);
            trip.Spending = tripEditingDTO.Spending;
            trip.Rating = tripEditingDTO.Rating;
            trip.Description = tripEditingDTO.Description;


            unitOfWork.Trips.Update(trip);
            unitOfWork.SaveChanges();
            return true;

        }
    }
}
