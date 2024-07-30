const request = require('supertest');
const express = require('express');
const app = require('./index');  // Make sure your server exports the app

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello World!');
  });
});
