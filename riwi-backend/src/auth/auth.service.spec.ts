import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException, ConflictException } from '@nestjs/common';
import { AuthService } from '../../src/auth/auth.service';
import { UsersService } from '../../src/users/users.service';
import { LoginDto } from '../../src/auth/dto/login.dto';
import { RegisterDto } from '../../src/auth/dto/register.dto';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            findByEmail: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('login', () => {
    it('should return access token for valid credentials', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'password123',
      };

      const mockUser = {
        id: '1',
        email: 'test@example.com',
        password: '$2b$10$hashedPassword',
        name: 'Test User',
        role: 'user',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(mockUser as any);
      jest.spyOn(jwtService, 'sign').mockReturnValue('mock-jwt-token');

      const result = await authService.login(loginDto);

      expect(result).toHaveProperty('access_token');
      expect(result.access_token).toBe('mock-jwt-token');
      expect(result.user).toHaveProperty('email', 'test@example.com');
    });

    it('should throw UnauthorizedException for invalid credentials', async () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'wrongpassword',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(null);

      await expect(authService.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const registerDto: RegisterDto = {
        name: 'Test User',
        email: 'new@example.com',
        password: 'password123',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue(null);
      jest.spyOn(usersService, 'create').mockResolvedValue({
        id: '1',
        ...registerDto,
        password: 'hashedPassword',
        role: 'user',
      } as any);
      jest.spyOn(jwtService, 'sign').mockReturnValue('mock-jwt-token');

      const result = await authService.register(registerDto);

      expect(result).toHaveProperty('access_token');
      expect(result.access_token).toBe('mock-jwt-token');
      expect(result.user).toHaveProperty('email', 'new@example.com');
    });

    it('should throw ConflictException for existing email', async () => {
      const registerDto: RegisterDto = {
        name: 'Test User',
        email: 'existing@example.com',
        password: 'password123',
      };

      jest.spyOn(usersService, 'findByEmail').mockResolvedValue({
        id: '1',
        email: 'existing@example.com',
      } as any);

      await expect(authService.register(registerDto)).rejects.toThrow(ConflictException);
    });
  });
});