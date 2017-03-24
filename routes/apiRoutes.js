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

router.get('/user/:user_name', (req, res) => { //eslint-disable-line
  const userName = req.params.user_name;
  console.log(`req.params.user_name: ${userName}`);
  client.get('users/show.json', {
    screen_name: userName,
    profile_image_url: true
  }).then(response => {
    console.log(response);
    res.json(response);
  }).catch(e => {
    console.log('~~~~~~~error~~~~~');
    console.error(e);
    res.status(404).json({ error: 'user not found' });
  });
  // client.get('followers/list', {
  //     screen_name: userName, //alexpolymath
  //     stringify_ids: true,
  //     count: 5,
  // }).then(response => {
  //     console.log(response);
  //     res.json(response);
  // }).catch(e => {
  //   console.log('~~~~~~~error~~~~~');
  //   console.error(e);
  // });
});

export default router;
