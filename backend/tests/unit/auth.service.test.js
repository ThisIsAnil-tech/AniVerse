const AuthService = require('../../src/services/AuthService');
const AdminRepository = require('../../src/repositories/AdminRepository');
const bcrypt = require('bcryptjs');

jest.mock('../../src/repositories/AdminRepository');

describe('AuthService Unit Tests', () => {
  it('should throw 401 error for non-existent admin email', async () => {
    AdminRepository.findByEmail.mockResolvedValue(null);
    await expect(AuthService.login('unknown@test.com', 'pass')).rejects.toThrow('Invalid email or password');
  });

  it('should throw 401 error for incorrect password', async () => {
    const mockAdmin = {
      _id: '123',
      email: 'admin@test.com',
      password: await bcrypt.hash('correct_pass', 10),
      role: 'Admin',
    };
    AdminRepository.findByEmail.mockResolvedValue(mockAdmin);
    await expect(AuthService.login('admin@test.com', 'wrong_pass')).rejects.toThrow('Invalid email or password');
  });
});
