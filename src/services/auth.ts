// src/services/auth.ts

export const loginService = async (email: string, password: string) => {
  // Simulate authentication service
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        resolve({ success: true, token: 'fake-token' });
      } else {
        resolve({ success: false, message: 'Invalid credentials' });
      }
    }, 1000);
  });
};