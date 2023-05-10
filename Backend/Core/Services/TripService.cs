using Core.Dtos;
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

            return result;
        }

        public bool Create(TripCreationDTO tripCreationDTO)
        {
            if (tripCreationDTO == null) return false;

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

            return true;
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
