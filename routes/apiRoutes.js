import express from 'express';
// import jwt from 'jsonwebtoken';
const router = express.Router();
const Twitter = require('twitter');

const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.SECRET_CLIENT;
const accessTokenKey = process.env.ACCESS_TOKEN_KEY;
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessTokenKey,
  access_token_secret: accessTokenSecret,
});

router.get('/user_a', (req, res) => { //eslint-disable-line
  console.log(consumerKey);
  console.log(consumerSecret);
  console.log(accessTokenKey);
  console.log(accessTokenSecret);
  client.get('followers/list', {
      screen_name: 'alexpolymath',
      stringify_ids: true,
      count: 5,
      cursor: '1561778087509337600'
  }).then((response) => {
      console.log(response);
      res.json(response);
  }).catch(e => {
    console.log('~~~~~~~error~~~~`');
    console.error(e);
  });
});

router.get('/user_b', (req, res) => { //eslint-disable-line
  client.get('followers/list', {
      screen_name: 'alexpolymath',
      stringify_ids: true,
      count: 5,
      cursor: '1561778087509337600'
    }).then((response) => {
      console.log(response);
      res.json(response);
    });
});

export default router;
