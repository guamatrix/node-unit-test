const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          })
        })
        .end(done);
    });    
  });

  describe('GET/USERS', () => {
    it('should contain Jhon Doe in the users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Jhon Doe',
            age: 24
          });
        })
        .end(done);
    });    
  });

});
