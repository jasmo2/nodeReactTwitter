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

router.get('/common-followers/:user_a/:user_b', (req, res) => { //eslint-disable-line
const userNameA = req.params.user_a;
const userNameB = req.params.user_b;
client.get('followers/list', {
  count: 200,
  screen_name: userNameA, //alexpolymath
  stringify_ids: true,
}).then(followerResponseA => {
  const followersA = followerResponseA.users;
  client.get('followers/list', {
    count: 200,
    screen_name: userNameB, //alexpolymath
    stringify_ids: true,
  }).then(followerResponseB => {
    const followersB = followerResponseB.users;
    const result = [];
    for (let followerA of followersA) { //eslint-disable-line
      for (let followerB of followersB) { //eslint-disable-line
        if (followerA.id === followerB.id) {
          result.push(followerA);
        }
      }
    }
    res.json({ result });
  }).catch(e => errorCatcher(e, res));
}).catch(e => errorCatcher(e, res));
});
function errorCatcher(e, res) {
    console.log('~~~~~~~error~~~~~');
    console.error(e);
    // [ { message: 'Rate limit exceeded', code: 88 } ]
    if (e[0].code && e[0].code === 88) {
      res.status(400).json({ error: `Twitter's ${e[0].message}` });
    } else {
      res.status(404).json({ error: 'user not found' });
    }
}
export default router;
