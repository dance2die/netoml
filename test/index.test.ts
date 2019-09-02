import auth from '../src/auth'

describe('Authentication', () => {
  test('user is logged in', () => {
    expect(auth.isLoggedIn()).toBe(true)
  });
});

