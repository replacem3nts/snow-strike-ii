const request = require('supertest');
const app = require('../src/app');
const { mountainOneId, mountainOne, resetDB } = require('./fixtures/db');

beforeEach(resetDB);

test('Should create a new mountain', async () => {
  const response = await request(app)
    .post('/mountains')
    .send({
      name: 'Powder Mountain',
      zipcode: '84310',
    })
    .expect(201);

  expect(response.body.mountain.name).toBe('Powder Mountain');
});

test('Should GET an existing mountain', async () => {
  await request(app)
    .get(`/mountains/${mountainOneId}`)
    .send({ _id: mountainOneId })
    .expect(200);
});

test('Should GET all existing mountains', async () => {
  const response = await request(app).get('/mountains').send().expect(200);

  expect(response.body.length).toBe(3);
});
