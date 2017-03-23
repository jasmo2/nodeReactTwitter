import express from 'express';
// import jwt from 'jsonwebtoken';
let router = express.Router();
import { OAuth } from 'oauth';

const clientID_A = process.env.CLIENT_ID_A;
const clientSecret_A = process.env.SECRET_CLIENT_A;
const callbackURL_A = process.env.CALLLBACK_URL_A;
const clientID_B = process.env.CLIENT_ID_B;
const clientSecret_B = process.env.SECRET_CLIENT_B;
const callbackURL_B = process.env.CALLLBACK_URL_B;

const oa_a = new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    clientID_A,
    clientSecret_A,
    '1.0',
    callbackURL_A,
    'HMAC-SHA1'
);

router.get('/auth/twitter/a', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('/auth/twitter/a');
  oa_a.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results) {
    if (error) {
      console.log(error);
      res.send("Authentication Failed!");
    }
    else {
      // debugger
      // req.session.oauth = {
      //   token: oauth_token,
      //   token_secret: oauth_token_secret
      // };
      // console.log(req.session.oauth);
      console.log(`oauth_token: ${oauth_token}`);

      res.redirect('https://twitter.com/oauth/authenticate?oauth_token='+oauth_token)
    }
  });

});

export default router;
