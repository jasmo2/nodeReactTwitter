/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_FOLLOWERS = exports.ADD_FOLLOWERS = 'ADD_FOLLOWERS';
var ADD_USER_A = exports.ADD_USER_A = 'ADD_USER_A';
var ADD_USER_B = exports.ADD_USER_B = 'ADD_USER_B';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _followersActions = __webpack_require__(9);

Object.keys(_followersActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _followersActions[key];
    }
  });
});

var _usersActions = __webpack_require__(10);

Object.keys(_usersActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _usersActions[key];
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(22);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(5);

var _redux = __webpack_require__(6);

var _reactRedux = __webpack_require__(2);

var _apiRoutes = __webpack_require__(8);

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

var _routes = __webpack_require__(20);

var _routes2 = _interopRequireDefault(_routes);

var _index = __webpack_require__(18);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', function (req, res) {
  /*
  Here we are first matching if the current url exists in the react router routes
   */
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.originalUrl }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var store = (0, _redux.createStore)(_index2.default);

      var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reactRouter.RouterContext, renderProps)
      ));

      /*
      We can dispatch actions from server side as well. This can be very useful if you want
      to inject some initial data into the app. For example, if you have some articles that
      you have fetched from database and you want to load immediately after the user has loaded
      the webpage, you can do so in here.
      	Here we are inject an list item into our app. Normally once the user has loaded the webpage
      we would make a request to the server and get the latest item list. But in the server we have
      instant connection to a database (for example, if you have a mongoDB or
         MySQL database installed in the server which contains all you items).
         So you can quickly fetch and inject it into the webpage.
      	This will help SEO as well. If you load the webpage and make a request to
         the server to get all the latest items/articles, by the time Google Search
         Engine may not see all the updated items/articles.
      	But if you inject the latest items/articles before it reaches the user,
         the Search Engine will see the item/article immediately.
       */

      var finalState = store.getState();

      res.status(200).send(renderFullPage(html, finalState));
    } else {
      res.status(404).send('Not found');
    }
  });
});

router.use('/api', _apiRoutes2.default);
/*
In this function, you can render you html part of the webpage. You can add some
meta tags or Opern Graph tags using JS variables.
 */
function renderFullPage(html, initialState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    \t<!-- Required meta tags always come first -->\n    \t<meta charset="utf-8">\n    \t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    \t<meta http-equiv="x-ua-compatible" content="ie=edge">\n    \t<title>React Router Redux Express</title>\n\n    \t<!-- Bootstrap CSS -->\n    \t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">\n    \t<link rel="stylesheet" href="../stylesheets/sweetalert.css">\n    \t<link rel="stylesheet" href="../stylesheets/main.css">\n    </head>\n    <body>\n\n    \t<div id="reactbody"><div>' + html + '</div></div>\n        <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          </script>\n    \t<script src="../bin/app.bundle.js"></script>\n    \t<!-- jQuery first, then Bootstrap JS. -->\n    \t<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>\n    \t<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>\n    \t<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>\n    </body>\n    </html>\n    ';
}

exports.default = router;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import jwt from 'jsonwebtoken';
var router = _express2.default.Router();
var Twitter = __webpack_require__(24);

var consumerKey = process.env.CONSUMER_KEY;
var consumerSecret = process.env.SECRET_CLIENT;
var accessTokenKey = process.env.ACCESS_TOKEN_KEY;
var accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

var client = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token_key: accessTokenKey,
  access_token_secret: accessTokenSecret
});

router.get('/common-followers/:user_a/:user_b', function (req, res) {
  //eslint-disable-line
  var userNameA = req.params.user_a;
  var userNameB = req.params.user_b;
  client.get('followers/list', {
    count: 200,
    screen_name: userNameA, //alexpolymath
    stringify_ids: true
  }).then(function (followerResponseA) {
    var followersA = followerResponseA.users;
    client.get('followers/list', {
      count: 200,
      screen_name: userNameB, //alexpolymath
      stringify_ids: true
    }).then(function (followerResponseB) {
      var followersB = followerResponseB.users;
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = followersA[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var followerA = _step.value;
          //eslint-disable-line
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = followersB[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var followerB = _step2.value;
              //eslint-disable-line
              if (followerA.id === followerB.id) {
                result.push(followerA);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      res.json({ result: result });
    }).catch(function (e) {
      return errorCatcher(e, res);
    });
  }).catch(function (e) {
    return errorCatcher(e, res);
  });
});
function errorCatcher(e, res) {
  console.log('~~~~~~~error~~~~~');
  // [ { message: 'Rate limit exceeded', code: 88 } ]
  try {
    var twitterError = e[0].message;
    res.status(400).json({ error: 'Twitter\'s ' + twitterError });
  } catch (err) {
    console.log('404');
    res.status(404).json({ error: 'user not found' });
  }
}
exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addFollowers = undefined;

var _types = __webpack_require__(1);

var addFollowers = exports.addFollowers = function addFollowers(followers) {
    return {
        type: _types.ADD_FOLLOWERS,
        payload: followers
    };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addUserB = exports.addUserA = undefined;

var _types = __webpack_require__(1);

var addUserA = exports.addUserA = function addUserA(userA) {
    return {
        type: _types.ADD_USER_A,
        payload: userA
    };
};
var addUserB = exports.addUserB = function addUserB(userB) {
    return {
        type: _types.ADD_USER_B,
        payload: userB
    };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FollowerItem = function (_Component) {
  _inherits(FollowerItem, _Component);

  function FollowerItem() {
    _classCallCheck(this, FollowerItem);

    return _possibleConstructorReturn(this, (FollowerItem.__proto__ || Object.getPrototypeOf(FollowerItem)).apply(this, arguments));
  }

  _createClass(FollowerItem, [{
    key: "render",
    value: function render() {
      var _props$follower = this.props.follower,
          profile_image_url_https = _props$follower.profile_image_url_https,
          name = _props$follower.name,
          location = _props$follower.location,
          screen_name = _props$follower.screen_name;

      return _react2.default.createElement(
        "li",
        { className: "list-group-item" },
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 col-sm-3" },
          _react2.default.createElement("img", { src: profile_image_url_https, alt: "Scott Stevens", className: "img-responsive img-circle" })
        ),
        _react2.default.createElement(
          "div",
          { className: "col-xs-12 col-sm-9" },
          _react2.default.createElement(
            "span",
            { className: "name" },
            screen_name
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "span",
            {
              className: "glyphicon glyphicon-map-marker text-muted c-info",
              "data-toggle": "tooltip", title: "5842 Hillcrest Rd"
            },
            location
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "span",
            { className: "visible-xs" },
            _react2.default.createElement(
              "span",
              { className: "text-muted" },
              name
            )
          ),
          _react2.default.createElement("br", null)
        ),
        _react2.default.createElement("div", { className: "clearfix" })
      );
    }
  }]);

  return FollowerItem;
}(_react.Component);

exports.default = FollowerItem;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { marginTop: 20 } },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Twitter Comparison'
                ),
                this.props.children
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _userTwitter = __webpack_require__(16);

var _userTwitter2 = _interopRequireDefault(_userTwitter);

var _compareUsers = __webpack_require__(14);

var _compareUsers2 = _interopRequireDefault(_compareUsers);

var _listFollowers = __webpack_require__(15);

var _listFollowers2 = _interopRequireDefault(_listFollowers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(_userTwitter2.default, { title: 'User A', userType: 'A' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(_userTwitter2.default, { title: 'User B', userType: 'B' })
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(_compareUsers2.default, { title: 'compare' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(_listFollowers2.default, null)
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

var _sweetalertReact = __webpack_require__(23);

var _sweetalertReact2 = _interopRequireDefault(_sweetalertReact);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompareButton = function (_Component) {
  _inherits(CompareButton, _Component);

  function CompareButton(props) {
    _classCallCheck(this, CompareButton);

    var _this = _possibleConstructorReturn(this, (CompareButton.__proto__ || Object.getPrototypeOf(CompareButton)).call(this, props));

    _this.state = { show: false, error: null, loading: false };
    _this.compare = _this.compare.bind(_this);
    return _this;
  }

  _createClass(CompareButton, [{
    key: 'compare',
    value: function compare() {
      var _this2 = this;

      var _props$users = this.props.users,
          userA = _props$users.userA,
          userB = _props$users.userB;

      if (userA && userB) {
        this.setState({ loading: true });
        _axios2.default.get('/api/common-followers/' + userA + '/' + userB).then(function (response) {
          console.log(response.data);
          _this2.setState({ loading: false });
          if (response.data.result.length === 0) {
            _this2.props.addFollowers([]);
            _this2.setState({
              loading: false,
              error: 'Users had no common followers',
              show: true
            });
          } else {
            _this2.props.addFollowers(response.data.result);
          }
        }).catch(function (error) {
          var err = error.response.data.error;
          console.log(err);
          _this2.setState({ show: true, error: err, loading: false });
        });
      } else {
        this.setState({ show: true, error: 'set the two users' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_sweetalertReact2.default, {
          show: this.state.show,
          title: 'Error',
          type: 'warning',
          text: this.state.error,
          onConfirm: function onConfirm() {
            return _this3.setState({ show: false });
          }
        }),
        this.state.loading ? _react2.default.createElement(
          'button',
          { className: 'btn-lg btn-success' },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-refresh glyphicon-refresh-animate' }),
          'Loading...'
        ) : _react2.default.createElement(
          'button',
          { onClick: this.compare, className: 'btn-lg btn-block btn-success' },
          this.props.title
        )
      );
    }
  }]);

  return CompareButton;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var users = state.users.users;
  // console.log(`CompareButton usersState: ${JSON.stringify(users)}`);

  return { users: users };
};

var mapDispatchToProps = {
  addFollowers: _actions.addFollowers
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CompareButton);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _follower = __webpack_require__(11);

var _follower2 = _interopRequireDefault(_follower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FollowersList = function (_Component) {
  _inherits(FollowersList, _Component);

  function FollowersList() {
    _classCallCheck(this, FollowersList);

    return _possibleConstructorReturn(this, (FollowersList.__proto__ || Object.getPrototypeOf(FollowersList)).apply(this, arguments));
  }

  _createClass(FollowersList, [{
    key: 'render',
    value: function render() {
      var followers = this.props.followers;

      if (followers.length === 0) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-offset-1 col-sm-10' },
            _react2.default.createElement(
              'div',
              { className: 'panel panel-default' },
              _react2.default.createElement(
                'div',
                { className: 'panel-heading c-list' },
                _react2.default.createElement(
                  'span',
                  { className: 'title' },
                  'Common Followers'
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'list-group', id: 'contact-list' },
                followers.map(function (follower) {
                  return _react2.default.createElement(_follower2.default, { follower: follower, key: follower.id_str });
                })
              )
            )
          )
        )
      );
    }
  }]);

  return FollowersList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var followers = state.followers.followers;

  return { followers: followers };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(FollowersList);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserTwitter = function (_Component) {
	_inherits(UserTwitter, _Component);

	function UserTwitter(props) {
		_classCallCheck(this, UserTwitter);

		var _this = _possibleConstructorReturn(this, (UserTwitter.__proto__ || Object.getPrototypeOf(UserTwitter)).call(this, props));

		_this.onChangeUser = _this.onChangeUser.bind(_this);
		return _this;
	}

	_createClass(UserTwitter, [{
		key: 'onChangeUser',
		value: function onChangeUser(event) {
			event.preventDefault();
			var userName = this.refs.inputTwitterUser.value; //eslint-disable-line

			if (this.props.userType === 'A') {
				this.props.addUserA(userName);
			} else if (this.props.userType === 'B') {
				this.props.addUserB(userName);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container' },
				_react2.default.createElement(
					'form',
					{ className: 'form-signin' },
					_react2.default.createElement(
						'h2',
						{ className: 'form-signin-heading' },
						this.props.title
					),
					_react2.default.createElement(
						'label',
						{ htmlFor: 'inputEmail', className: 'sr-only' },
						'Twitter User'
					),
					_react2.default.createElement('input', {
						type: 'text', ref: 'inputTwitterUser', onChange: this.onChangeUser, className: 'form-control',
						placeholder: 'eg: ComJasmo2', required: '', autoFocus: ''
					})
				)
			);
		}
	}]);

	return UserTwitter;
}(_react.Component);

var mapDispatchToProps = {
	addUserA: _actions.addUserA, addUserB: _actions.addUserB
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(UserTwitter);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _types.ADD_FOLLOWERS:
            return _extends({}, state, { followers: action.payload });
        default:
            return state;
    }
};

var _types = __webpack_require__(1);

var INITIAL_STATE = { followers: [] };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _user = __webpack_require__(19);

var _user2 = _interopRequireDefault(_user);

var _follower = __webpack_require__(17);

var _follower2 = _interopRequireDefault(_follower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    users: _user2.default, followers: _follower2.default
});

exports.default = rootReducer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _types.ADD_USER_A:
            // console.log(`action.payload: UserA: ${action.payload}`);
            return _extends({}, state, { users: { userB: state.users.userB, userA: action.payload } });
        case _types.ADD_USER_B:
            // console.log(`action.payload: UserB: ${action.payload}`);
            return _extends({}, state, { users: { userA: state.users.userA, userB: action.payload } });
        default:
            return state;
    }
};

var _types = __webpack_require__(1);

var INITIAL_STATE = { users: { userA: null, userB: null } };

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(5);

var _header = __webpack_require__(12);

var _header2 = _interopRequireDefault(_header);

var _main = __webpack_require__(13);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: _header2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _main2.default })
    )
);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("sweetalert-react");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("twitter");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/bin', _express2.default.static('./bin'));
app.use('/stylesheets', _express2.default.static('./public/stylesheets'));

app.use('/', _index2.default);
app.use('/view/*', _index2.default);

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Hello World listening on port ' + port + '!');
});

/***/ })
/******/ ]);