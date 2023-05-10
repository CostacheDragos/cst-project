using DataLayer.Dtos;
using DataLayer.Entities;

namespace DataLayer.Mapping
{
    public static class TripsMappingExtensions
    {
        public static List<TripListingDTO> ToTripListingDTOs(this List<Trip> trips)
        {
            if (trips == null)
            {
                return null;
            }

            var results = trips.Select(t => t.ToTripListingDTO()).ToList();

            return results;
        }
        public static TripListingDTO ToTripListingDTO(this Trip trip)
        {
            if (trip == null) return null;

            var result = new TripListingDTO();
            result.UserId = trip.UserId;
            result.TripId = trip.Id;
            result.Name = trip.Name;
            result.Country = trip.Country;
            result.Date = trip.Date.ToShortDateString();
            result.Spending = trip.Spending;
            result.Rating = trip.Rating;
            result.Description = trip.Description;

            return result;
        }

    }
}
