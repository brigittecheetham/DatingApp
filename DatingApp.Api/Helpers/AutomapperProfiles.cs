using AutoMapper;
using DatingApp.Api.Dto;
using DatingApp.Api.Models;

namespace DatingApp.Api.Helpers
{
    public class AutomapperProfiles : Profile
    {
        public AutomapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<Photo, PhotosForDetailedDto>();
        }           
    }
}