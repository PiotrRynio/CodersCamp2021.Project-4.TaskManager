// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// import { server } from 'mocks/msw/rest-api/server';
jest.setTimeout(5000);

beforeAll(() => {
  // server.listen();
});

beforeEach(() => {
  // server.resetHandlers();
});

afterAll(() => {
  // server.close();
});
