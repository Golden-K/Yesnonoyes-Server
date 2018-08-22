require('dotenv').config();
const API_KEY = process.env.API_KEY;
const yelp = require('yelp-fusion');

const client = yelp.client(API_KEY);

module.exports = client;