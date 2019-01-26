using System;
using System.Collections.Generic;

namespace DatingApp.Api.Dto
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public string Introduction { get; set; }
        public string LookingFor  { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<PhotosForDetailedDto> Photos { get; set; }
    }
}