import auth from '../src/auth'
// import * as Comnmand from "@netlify/cli-utils"

// console.log(`Comnmand`, Comnmand)
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

