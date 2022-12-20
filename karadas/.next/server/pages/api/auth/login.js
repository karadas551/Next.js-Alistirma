"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: 'user'\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    avatar: {\n        type: String,\n        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('user', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQUMsQ0FBQztJQUNwQ0csSUFBSSxFQUFFLENBQUM7UUFDSEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDSkgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLE1BQU0sRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsUUFBUSxFQUFFLENBQUM7UUFDUEwsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREksSUFBSSxFQUFFLENBQUM7UUFDSE4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDSFIsSUFBSSxFQUFFUyxPQUFPO1FBQ2JGLE9BQU8sRUFBRSxLQUFLO0lBQ2xCLENBQUM7SUFDREcsTUFBTSxFQUFFLENBQUM7UUFDTFYsSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUEyRjtJQUN4RyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLENBQUM7SUFDQUksVUFBVSxFQUFFLElBQUk7QUFDcEIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHaEIsNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsQ0FBTSxPQUFFQyxVQUFVO0FBQ3ZFLGlFQUFlZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAxLy4vbW9kZWxzL3VzZXJNb2RlbC5qcz85NjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV2YXRjaGFubmVsL2ltYWdlL3VwbG9hZC92MTYwMjc1MjQwMi9hdmF0YXIvYXZhdGFyX2N1Z3E0MC5wbmcnXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0Iiwicm9vdCIsIkJvb2xlYW4iLCJhdmF0YXIiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"(api)/./utils/connectDB.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ \"(api)/./models/userModel.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/generateToken */ \"(api)/./utils/generateToken.js\");\n\n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"POST\":\n            await login(req, res);\n            break;\n    }\n});\nconst login = async (req, res)=>{\n    try {\n        const { email , password  } = req.body;\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (!user) return res.status(400).json({\n            err: 'This user does not exist.'\n        });\n        const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user.password);\n        if (!isMatch) return res.status(400).json({\n            err: 'Incorrect password.'\n        });\n        const access_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__.createAccessToken)({\n            id: user._id\n        });\n        const refresh_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__.createRefreshToken)({\n            id: user._id\n        });\n        res.json({\n            msg: \"Giriş Başarılı!\",\n            refresh_token,\n            access_token,\n            user: {\n                name: user.name,\n                email: user.email,\n                role: user.role,\n                avatar: user.avatar,\n                root: user.root\n            }\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDSDtBQUNsQjtBQUN5RDtBQUdwRkEsNERBQVM7QUFFVCxpRUFBTSxPQUFnQkssR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxNQUFNLENBQUNELEdBQUcsQ0FBQ0UsTUFBTTtRQUNiLElBQUksQ0FBQyxDQUFNO1lBQ1AsS0FBSyxDQUFDQyxLQUFLLENBQUNILEdBQUcsRUFBRUMsR0FBRztZQUNwQixLQUFLOztBQUVqQixDQUFDO0FBRUQsS0FBSyxDQUFDRSxLQUFLLFVBQVVILEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDL0IsR0FBRyxFQUFDO1FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxHQUFFQyxRQUFRLEVBQUMsQ0FBQyxHQUFHTCxHQUFHLENBQUNNLElBQUk7UUFFcEMsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDWCxpRUFBYSxDQUFDLENBQUM7WUFBQ1EsS0FBSztRQUFDLENBQUM7UUFDMUMsRUFBRSxHQUFFRyxJQUFJLEVBQUUsTUFBTSxDQUFDTixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDQztZQUFBQSxHQUFHLEVBQUUsQ0FBMkI7UUFBQSxDQUFDO1FBRXhFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ2YscURBQWMsQ0FBQ1EsUUFBUSxFQUFFRSxJQUFJLENBQUNGLFFBQVE7UUFDNUQsRUFBRSxHQUFFTyxPQUFPLEVBQUUsTUFBTSxDQUFDWCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDQztZQUFBQSxHQUFHLEVBQUUsQ0FBcUI7UUFBQSxDQUFDO1FBRXJFLEtBQUssQ0FBQ0csWUFBWSxHQUFHaEIsdUVBQWlCLENBQUMsQ0FBQ2lCO1lBQUFBLEVBQUUsRUFBRVIsSUFBSSxDQUFDUyxHQUFHO1FBQUEsQ0FBQztRQUNyRCxLQUFLLENBQUNDLGFBQWEsR0FBR2xCLHdFQUFrQixDQUFDLENBQUNnQjtZQUFBQSxFQUFFLEVBQUVSLElBQUksQ0FBQ1MsR0FBRztRQUFBLENBQUM7UUFFdkRmLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDLENBQUM7WUFDTlEsR0FBRyxFQUFFLENBQWlCO1lBQ3RCRCxhQUFhO1lBQ2JILFlBQVk7WUFDWlAsSUFBSSxFQUFFLENBQUM7Z0JBQ0hZLElBQUksRUFBRVosSUFBSSxDQUFDWSxJQUFJO2dCQUNmZixLQUFLLEVBQUVHLElBQUksQ0FBQ0gsS0FBSztnQkFDakJnQixJQUFJLEVBQUViLElBQUksQ0FBQ2EsSUFBSTtnQkFDZkMsTUFBTSxFQUFFZCxJQUFJLENBQUNjLE1BQU07Z0JBQ25CQyxJQUFJLEVBQUVmLElBQUksQ0FBQ2UsSUFBSTtZQUNuQixDQUFDO1FBQ0wsQ0FBQztJQUVMLENBQUMsTUFBSyxFQUFDWCxHQUFHLEVBQUMsQ0FBQztRQUNSLE1BQU0sQ0FBQ1YsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7WUFBQUEsR0FBRyxFQUFFQSxHQUFHLENBQUNZLE9BQU87UUFBQSxDQUFDO0lBQ2xELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAxLy4vcGFnZXMvYXBpL2F1dGgvbG9naW4uanM/MTMxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlck1vZGVsJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NUb2tlbiwgY3JlYXRlUmVmcmVzaFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZ2VuZXJhdGVUb2tlbidcblxuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgICBhd2FpdCBsb2dpbihyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY29uc3QgbG9naW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZW1haWwgfSlcbiAgICAgICAgaWYoIXVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnVGhpcyB1c2VyIGRvZXMgbm90IGV4aXN0Lid9KVxuXG4gICAgICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZClcbiAgICAgICAgaWYoIWlzTWF0Y2gpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW5jb3JyZWN0IHBhc3N3b3JkLid9KVxuXG4gICAgICAgIGNvbnN0IGFjY2Vzc190b2tlbiA9IGNyZWF0ZUFjY2Vzc1Rva2VuKHtpZDogdXNlci5faWR9KVxuICAgICAgICBjb25zdCByZWZyZXNoX3Rva2VuID0gY3JlYXRlUmVmcmVzaFRva2VuKHtpZDogdXNlci5faWR9KVxuICAgICAgICBcbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgbXNnOiBcIkdpcmnFnyBCYcWfYXLEsWzEsSFcIixcbiAgICAgICAgICAgIHJlZnJlc2hfdG9rZW4sXG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxuICAgICAgICAgICAgICAgIHJvb3Q6IHVzZXIucm9vdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfWNhdGNoKGVycil7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJVc2VycyIsImJjcnlwdCIsImNyZWF0ZUFjY2Vzc1Rva2VuIiwiY3JlYXRlUmVmcmVzaFRva2VuIiwicmVxIiwicmVzIiwibWV0aG9kIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJmaW5kT25lIiwic3RhdHVzIiwianNvbiIsImVyciIsImlzTWF0Y2giLCJjb21wYXJlIiwiYWNjZXNzX3Rva2VuIiwiaWQiLCJfaWQiLCJyZWZyZXNoX3Rva2VuIiwibXNnIiwibmFtZSIsInJvbGUiLCJhdmF0YXIiLCJyb290IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ }),

/***/ "(api)/./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://omer:w4RfQF0IclaVOOjL@cluster0.1yjkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztlQUVOQyxTQUFTLEdBQUcsQ0FBQztJQUN4QixFQUFFLEVBQUVELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFLENBQUM7UUFDekIsTUFBTTtJQUNWLENBQUM7SUFFRCxLQUFLLENBQUNDLEVBQUUsR0FBRyxLQUFLLENBQUNKLHVEQUFnQixDQUFDTSw0R0FBcUIsRUFBRSxDQUFDO1FBQ3RERyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtJQUM1QixDQUFDO0lBRURULFVBQVUsQ0FBQ0UsV0FBVyxHQUFHQyxFQUFFLENBQUNPLFdBQVcsQ0FBQyxDQUFDLEVBQUVDLFVBQVU7QUFDekQsQ0FBQztBQUVELGlFQUFlVixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWFwcDEvLi91dGlscy9jb25uZWN0REIuanM/YzYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBjb25uZWN0aW9uID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/connectDB.js\n");

/***/ }),

/***/ "(api)/./utils/generateToken.js":
/*!********************************!*\
  !*** ./utils/generateToken.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAccessToken\": () => (/* binding */ createAccessToken),\n/* harmony export */   \"createRefreshToken\": () => (/* binding */ createRefreshToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n\nconst createAccessToken = (payload)=>{\n    console.log(\"YOUR_ACCESS_TOKEN_SECRET\");\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, \"YOUR_ACCESS_TOKEN_SECRET\", {\n        expiresIn: '15m'\n    });\n};\nconst createRefreshToken = (payload)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, \"YOUR_REFRESH_TOKEN_SECRET\", {\n        expiresIn: '7d'\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9nZW5lcmF0ZVRva2VuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEI7QUFFdkIsS0FBSyxDQUFDQyxpQkFBaUIsSUFBSUMsT0FBTyxHQUFLLENBQUM7SUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQywwQkFBK0I7SUFDM0MsTUFBTSxDQUFDTCx3REFBUSxDQUFDRSxPQUFPLEVBQUVHLDBCQUErQixFQUFFLENBQUNJO1FBQUFBLFNBQVMsRUFBRSxDQUFLO0lBQUEsQ0FBQztBQUNoRixDQUFDO0FBRU0sS0FBSyxDQUFDQyxrQkFBa0IsSUFBSVIsT0FBTyxHQUFLLENBQUM7SUFDNUMsTUFBTSxDQUFDRix3REFBUSxDQUFDRSxPQUFPLEVBQUVHLDJCQUFnQyxFQUFFLENBQUNJO1FBQUFBLFNBQVMsRUFBRSxDQUFJO0lBQUEsQ0FBQztBQUNoRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAxLy4vdXRpbHMvZ2VuZXJhdGVUb2tlbi5qcz9kZDQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQWNjZXNzVG9rZW4gPSAocGF5bG9hZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpXG4gICAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQsIHtleHBpcmVzSW46ICcxNW0nfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZnJlc2hUb2tlbiA9IChwYXlsb2FkKSA9PiB7XG4gICAgcmV0dXJuIGp3dC5zaWduKHBheWxvYWQsIHByb2Nlc3MuZW52LlJFRlJFU0hfVE9LRU5fU0VDUkVULCB7ZXhwaXJlc0luOiAnN2QnfSlcbn0iXSwibmFtZXMiOlsiand0IiwiY3JlYXRlQWNjZXNzVG9rZW4iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwic2lnbiIsImV4cGlyZXNJbiIsImNyZWF0ZVJlZnJlc2hUb2tlbiIsIlJFRlJFU0hfVE9LRU5fU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/generateToken.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();