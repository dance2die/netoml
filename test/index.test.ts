import auth from '../src/auth'

// import { sum } from '../src';
// describe('blah', () => {
//   it('works', () => {
//     expect(sum(1, 1)).toEqual(2);
//   });
// });


describe('Authentication', () => {
  test('that user has logged in', () => {
    expect(auth.isLoggedIn()).toBe(true)
  });
});

