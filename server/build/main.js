require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__JSONreader__ = __webpack_require__(2);
var io = __webpack_require__(8)();



io.on('connection', function (socket) {
  Object(__WEBPACK_IMPORTED_MODULE_0__JSONreader__["a" /* getAllHouses */])().then(function (res) {
    socket.emit('initHouse', { houses: res });
  }).catch(function (err) {
    console.log(err);
  });
});

/* harmony default export */ __webpack_exports__["a"] = (io);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSpecificHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllHouses; });
var dbData = __webpack_require__(3);

function getSpecificHouse(id) {
  return new Promise(function (resolve, reject) {
    for (var i = 0; i < dbData.houses.length; i++) {
      if (Object.keys(dbData.houses[i])[0] === id) {
        resolve(dbData.houses[i]);
      }
    }
    reject('sorry could not find that');
  });
}

function getAllHouses() {
  return new Promise(function (resolve, reject) {
    if (dbData) {
      resolve(dbData.houses);
    }
    reject('sorry the db seems empty');
  });
}



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"houses": [
		{
			"house1": {
				"adress": "hejvägen 1",
				"rooms": [
					{
						"name": "Vardagsrum",
						"temperature": 21,
						"humidity": 0.5
					},
					{
						"name": "Farstun",
						"temperature": -3,
						"humidity": 95
					},
					{
						"name": "Köket",
						"temperature": 23,
						"humidity": 0.5
					},
					{
						"name": "Toa1",
						"temperature": 30,
						"humidity": 0.6
					},
					{
						"name": "Toa2",
						"temperature": 25,
						"humidity": 0.7
					},
					{
						"name": "Sovrum1",
						"temperature": 19,
						"humidity": 0.4
					},
					{
						"name": "Sovrum2",
						"temperature": 17,
						"humidity": 0.5
					},
					{
						"name": "Garage",
						"temperature": 2,
						"humidity": 91
					}
				]
			}
		},
		{
			"house2": {
				"adress": "hejvägen 14",
				"rooms": [
					{
						"name": "Vardagsrum",
						"temperature": 21,
						"humidity": 0.5
					},
					{
						"name": "Farstun",
						"temperature": -3,
						"humidity": 95
					},
					{
						"name": "Köket",
						"temperature": 23,
						"humidity": 0.5
					},
					{
						"name": "Toa1",
						"temperature": 30,
						"humidity": 0.6
					},
					{
						"name": "Toa2",
						"temperature": 25,
						"humidity": 0.7
					},
					{
						"name": "Sovrum1",
						"temperature": 19,
						"humidity": 0.4
					},
					{
						"name": "Sovrum2",
						"temperature": 17,
						"humidity": 0.5
					},
					{
						"name": "Garage",
						"temperature": 2,
						"humidity": 92
					}
				]
			}
		},
		{
			"house3": {
				"adress": "hejvägen 13",
				"rooms": [
					{
						"name": "Vardagsrum",
						"temperature": 21,
						"humidity": 0.5
					},
					{
						"name": "Farstun",
						"temperature": -3,
						"humidity": 95
					},
					{
						"name": "Köket",
						"temperature": 23,
						"humidity": 0.5
					},
					{
						"name": "Toa1",
						"temperature": 30,
						"humidity": 0.6
					},
					{
						"name": "Toa2",
						"temperature": 25,
						"humidity": 0.7
					},
					{
						"name": "Sovrum1",
						"temperature": 19,
						"humidity": 0.4
					},
					{
						"name": "Sovrum2",
						"temperature": 17,
						"humidity": 0.5
					},
					{
						"name": "Garage",
						"temperature": 2,
						"humidity": 93
					}
				]
			}
		},
		{
			"house4": {
				"adress": "hejvägen 12",
				"rooms": [
					{
						"name": "Vardagsrum",
						"temperature": 21,
						"humidity": 0.5
					},
					{
						"name": "Farstun",
						"temperature": -3,
						"humidity": 95
					},
					{
						"name": "Köket",
						"temperature": 23,
						"humidity": 0.5
					},
					{
						"name": "Toa1",
						"temperature": 30,
						"humidity": 0.6
					},
					{
						"name": "Toa2",
						"temperature": 25,
						"humidity": 0.7
					},
					{
						"name": "Sovrum1",
						"temperature": 19,
						"humidity": 0.4
					},
					{
						"name": "Sovrum2",
						"temperature": 17,
						"humidity": 0.5
					},
					{
						"name": "Garage",
						"temperature": 2,
						"humidity": 94
					}
				]
			}
		}
	]
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_socketControl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_houseRouter__ = __webpack_require__(9);
console.log('Hello World');
var cors = __webpack_require__(6);
var express = __webpack_require__(0);
var app = __webpack_require__(0)();
var server = __webpack_require__(7).Server(app);




server.listen(1337);

app.use(express.static(__dirname + '/public'));
app.use(cors());

app.use('/house', __WEBPACK_IMPORTED_MODULE_1__router_houseRouter__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0__modules_socketControl__["a" /* default */].attach(server);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_socketControl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_JSONreader__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_extras_JSONwriter__ = __webpack_require__(11);
var express = __webpack_require__(0);
var houseRouter = express.Router();
var bodyParser = __webpack_require__(10);
var jsonParser = bodyParser.json();




houseRouter.get('/:id', function (req, res) {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_JSONreader__["b" /* getSpecificHouse */])(req.params.id).then(function (response) {
    res.send(response);
  }).catch(function (err) {
    res.send(err);
  });
});

houseRouter.get('/', function (req, res) {
  Object(__WEBPACK_IMPORTED_MODULE_1__modules_JSONreader__["a" /* getAllHouses */])(req.params.id).then(function (response) {
    res.send(response);
  }).catch(function (err) {
    res.send(err);
  });
});

houseRouter.patch('/', jsonParser, function (req, res) {
  Object(__WEBPACK_IMPORTED_MODULE_2__modules_extras_JSONwriter__["a" /* addHouse */])(req.body).then(function (res) {
    __WEBPACK_IMPORTED_MODULE_0__modules_socketControl__["a" /* default */].emit('added', res);
  }).catch(function (err) {});
  res.end();
});

houseRouter.patch('/:id', jsonParser, function (req, res) {
  Object(__WEBPACK_IMPORTED_MODULE_2__modules_extras_JSONwriter__["b" /* addRoom */])(req.params.id, req.body).then(function (res) {
    __WEBPACK_IMPORTED_MODULE_0__modules_socketControl__["a" /* default */].emit('updated', res);
  }).catch(function (err) {});
  res.end();
});

/* harmony default export */ __webpack_exports__["a"] = (houseRouter);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addHouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addRoom; });
var dbData = __webpack_require__(3);

//Test to add house
//
// curl -H "Content-Type: application/json" -X PATCH -d '{"house5": {
//         "adress": "testvägen 1",
//         "rooms": [
//           { "name": "Vardagsrum", "temperature": 21, "humidity": 0.5 },
//           { "name": "Farstun", "temperature": -3, "humidity": 95 },
//           { "name": "Köket", "temperature": 23, "humidity": 0.5 },
//           { "name": "Toa1", "temperature": 30, "humidity": 0.6 },
//           { "name": "Toa2", "temperature": 25, "humidity": 0.7 },
//           { "name": "Sovrum1", "temperature": 19, "humidity": 0.4 },
//           { "name": "Sovrum2", "temperature": 17, "humidity": 0.5 },
//           { "name": "Garage", "temperature": 2, "humidity": 94 }
//         ]
//       }}' http://localhost:1337/house/

function addHouse(newHouse) {
  return new Promise(function (resolve, reject) {
    dbData.houses.push(newHouse);
    resolve(dbData.houses);
  });
}

//Test to add room
//
// curl -H "Content-Type: application/json" -X PATCH -d '{ "name": "testrum", "temperature": 21, "humidity": 0.5 }' http://localhost:1337/house/house1
function addRoom(houseId, newRoom) {

  return new Promise(function (resolve, reject) {

    for (var i = 0; i < dbData.houses.length; i++) {
      if (Object.keys(dbData.houses[i])[0] === houseId) {
        dbData.houses[i][houseId].rooms.push(newRoom);
        console.log(dbData.houses[i][houseId].rooms);
      }
    }

    resolve(dbData.houses);
  });
}



/***/ })
/******/ ]);
//# sourceMappingURL=main.map