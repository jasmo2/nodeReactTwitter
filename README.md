# Twitter NodeJS ReactJS: _[twiter-node-react.herokuapp.com](https://twiter-node-react.herokuapp.com/)_

## Skeleton
Skeleton taken from [https://github.com/tahnik/react-express-webpack-babel](https://github.com/tahnik/react-express-webpack-babel#readme) ,found in Yeoman as _react-express-webpack-babel_

## external packages
- To get information from _twitter_ have use the package __[node-twitter](https://github.com/desmondmorris/node-twitter)__ which a friendly interphase to consume twitter-api

- Use __axios__ to ajax as a light weight library for ajax requests


## Steps taken for the development
- Construct _UserTwitter_ component
  - set the Store for *users* && *followers* (the interphase is constructed)
- Construct _CompareUsers_
  - Connect with the global store
  - make ajax request with __axios__
  - get databack from server
- Construct the backend Get connected to twitter-api
  - Get Followers list
  - set catch in case errors occurs
  - compare followers from both inputs
- Construct the list to render The followers
- Contstruct the item for the list and render data from server


## Deployment
The application is deploy on heroku. The url is _[twiter-node-react.herokuapp.com](https://twiter-node-react.herokuapp.com/)_

The deploy process is to run a compiler on the server that deploys the code && run an script that "uglify && minify" it, for production environment.
