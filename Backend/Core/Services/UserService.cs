using Core.Dtos;
using DataLayer.Entities;
using DataLayer.Enums;
using DataLayer;
using DataLayer.Mapping;
using DataLayer.Dtos;

namespace Core.Services
{
    public class UserService
    {
        private readonly UnitOfWork unitOfWork;

        private AuthorizationService authService { get; set; }

        public UserService(UnitOfWork unitOfWork, AuthorizationService authService)
        {
            this.unitOfWork = unitOfWork;
            this.authService = authService;
        }

        public void Register(UserRegisterDTO registerData)
        {
            if (registerData == null)
            {
                return;
            }

            var hashedPassword = authService.HashPassword(registerData.Password);

            var user = new User
            {
                Email = registerData.Email,
                PasswordHash = hashedPassword,
                Name = registerData.Name,
                Surname = registerData.Surname,
                RoleId = (int)RoleEnums.User
            };

            unitOfWork.Users.Insert(user);
            unitOfWork.SaveChanges();
        }

        public string Validate(UserLoginDTO payload)
        {
            var user = unitOfWork.Users.GetByEmail(payload.Email);
            if (user == null)
            {
                return null;
            }

            var passwordFine = authService.VerifyPassword(payload.Password, user.PasswordHash);

            if (passwordFine)
            {
                var role = unitOfWork.Roles.GetById(user.RoleId);

                return authService.GenerateToken(user, role.Name);
            }
            else
            {
                return null;
            }

        }

        public List<UserDto> GetAll()
        {
            var results = unitOfWork.Users.GetAll().ToUserDtos();

            return results;
        }
        public bool Delete(int userId)
        {
            var user = unitOfWork.Users.GetById(userId);
            if (user == null) return false;
            unitOfWork.Users.Remove(user);
            unitOfWork.SaveChanges();
            return true;
        }
    }
}
