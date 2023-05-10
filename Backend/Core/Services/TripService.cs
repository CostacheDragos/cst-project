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
                Date = DateTime.Parse(tripCreationDTO.Date),
                Spending = tripCreationDTO.Spending,
                Rating = tripCreationDTO.Rating,
                Description = tripCreationDTO.Description,
            };

            unitOfWork.Trips.Insert(trip);
            unitOfWork.SaveChanges();

            return true;
        }
    }
}
