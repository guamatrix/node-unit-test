const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy({ name: 'Jhon Doe' });
    expect(spy).toHaveBeenCalledWith({ name: 'Jhon Doe' });
  });

  it('should call saveUser with user object', () => {
    const email = 'jhon@doe.com';
    const password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});