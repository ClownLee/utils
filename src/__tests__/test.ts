import { sayHelloWorld } from '../index';

test('My Greeter', () => {
  expect(sayHelloWorld('Carl')).toBe('Hello Carl');
});
