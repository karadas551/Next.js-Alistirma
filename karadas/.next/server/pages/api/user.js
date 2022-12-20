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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

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

/***/ "(api)/./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ \"(api)/./models/userModel.js\");\n\n\nconst auth = async (req, res)=>{\n    const token = req.headers.authorization;\n    if (!token) return res.status(400).json({\n        err: 'Invalid Authentication.'\n    });\n    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"YOUR_ACCESS_TOKEN_SECRET\");\n    if (!decoded) return res.status(400).json({\n        err: 'Invalid Authentication.'\n    });\n    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n        _id: decoded.id\n    });\n    return {\n        id: user._id,\n        role: user.role,\n        root: user.root\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QjtBQUNTO0FBR3ZDLEtBQUssQ0FBQ0UsSUFBSSxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQzlCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsYUFBYTtJQUN2QyxFQUFFLEdBQUVGLEtBQUssRUFBRSxNQUFNLENBQUNELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNDO1FBQUFBLEdBQUcsRUFBRSxDQUF5QjtJQUFBLENBQUM7SUFFdkUsS0FBSyxDQUFDQyxPQUFPLEdBQUdYLDBEQUFVLENBQUNLLEtBQUssRUFBRVEsMEJBQStCO0lBQ2pFLEVBQUUsR0FBRUYsT0FBTyxFQUFFLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7UUFBQUEsR0FBRyxFQUFFLENBQXlCO0lBQUEsQ0FBQztJQUV6RSxLQUFLLENBQUNNLElBQUksR0FBRyxLQUFLLENBQUNmLGlFQUFhLENBQUMsQ0FBQ2lCO1FBQUFBLEdBQUcsRUFBRVAsT0FBTyxDQUFDUSxFQUFFO0lBQUEsQ0FBQztJQUVsRCxNQUFNLENBQUMsQ0FBQ0E7UUFBQUEsRUFBRSxFQUFFSCxJQUFJLENBQUNFLEdBQUc7UUFBRUUsSUFBSSxFQUFFSixJQUFJLENBQUNJLElBQUk7UUFBRUMsSUFBSSxFQUFFTCxJQUFJLENBQUNLLElBQUk7SUFBQSxDQUFDO0FBQzNELENBQUM7QUFHRCxpRUFBZW5CLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWFwcDEvLi9taWRkbGV3YXJlL2F1dGguanM/MWM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCBVc2VycyBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJ1xuXG5cbmNvbnN0IGF1dGggPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XG4gICAgaWYoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXG5cbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVClcbiAgICBpZighZGVjb2RlZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdJbnZhbGlkIEF1dGhlbnRpY2F0aW9uLid9KVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe19pZDogZGVjb2RlZC5pZH0pXG5cbiAgICByZXR1cm4ge2lkOiB1c2VyLl9pZCwgcm9sZTogdXNlci5yb2xlLCByb290OiB1c2VyLnJvb3R9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwibmFtZXMiOlsiand0IiwiVXNlcnMiLCJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./middleware/auth.js\n");

/***/ }),

/***/ "(api)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        default: 'user'\n    },\n    root: {\n        type: Boolean,\n        default: false\n    },\n    avatar: {\n        type: String,\n        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'\n    }\n}, {\n    timestamps: true\n});\nlet Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.user) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('user', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dataset);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixLQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQUMsQ0FBQztJQUNwQ0csSUFBSSxFQUFFLENBQUM7UUFDSEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDSkgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RFLE1BQU0sRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsUUFBUSxFQUFFLENBQUM7UUFDUEwsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2xCLENBQUM7SUFDREksSUFBSSxFQUFFLENBQUM7UUFDSE4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUFNO0lBQ25CLENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDSFIsSUFBSSxFQUFFUyxPQUFPO1FBQ2JGLE9BQU8sRUFBRSxLQUFLO0lBQ2xCLENBQUM7SUFDREcsTUFBTSxFQUFFLENBQUM7UUFDTFYsSUFBSSxFQUFFQyxNQUFNO1FBQ1pNLE9BQU8sRUFBRSxDQUEyRjtJQUN4RyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLENBQUM7SUFDQUksVUFBVSxFQUFFLElBQUk7QUFDcEIsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsT0FBTyxHQUFHaEIsNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsQ0FBTSxPQUFFQyxVQUFVO0FBQ3ZFLGlFQUFlZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAxLy4vbW9kZWxzL3VzZXJNb2RlbC5qcz85NjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV2YXRjaGFubmVsL2ltYWdlL3VwbG9hZC92MTYwMjc1MjQwMi9hdmF0YXIvYXZhdGFyX2N1Z3E0MC5wbmcnXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInJvbGUiLCJkZWZhdWx0Iiwicm9vdCIsIkJvb2xlYW4iLCJhdmF0YXIiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/index.js":
/*!*********************************!*\
  !*** ./pages/api/user/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ \"(api)/./utils/connectDB.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ \"(api)/./models/userModel.js\");\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ \"(api)/./middleware/auth.js\");\n\n\n\n(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    switch(req.method){\n        case \"PATCH\":\n            await uploadInfor(req, res);\n            break;\n        case \"GET\":\n            await getUsers(req, res);\n            break;\n    }\n});\nconst getUsers = async (req, res)=>{\n    try {\n        const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n        if (result.role !== 'admin') return res.status(400).json({\n            err: \"Authentication is not valid\"\n        });\n        const users = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().select('-password');\n        res.json({\n            users\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\nconst uploadInfor = async (req, res)=>{\n    try {\n        const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req, res);\n        const { name , avatar  } = req.body;\n        const newUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n            _id: result.id\n        }, {\n            name,\n            avatar\n        });\n        res.json({\n            msg: \"Update Success!\",\n            user: {\n                name,\n                avatar,\n                email: newUser.email,\n                role: newUser.role\n            }\n        });\n    } catch (err) {\n        return res.status(500).json({\n            err: err.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBQ0g7QUFDRjtBQUUzQ0EsNERBQVM7QUFFVCxpRUFBTSxPQUFnQkcsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxNQUFNLENBQUNELEdBQUcsQ0FBQ0UsTUFBTTtRQUNiLElBQUksQ0FBQyxDQUFPO1lBQ1IsS0FBSyxDQUFDQyxXQUFXLENBQUNILEdBQUcsRUFBRUMsR0FBRztZQUMxQixLQUFLO1FBQ1QsSUFBSSxDQUFDLENBQUs7WUFDTixLQUFLLENBQUNHLFFBQVEsQ0FBQ0osR0FBRyxFQUFFQyxHQUFHO1lBQ3ZCLEtBQUs7O0FBRWpCLENBQUM7QUFFRCxLQUFLLENBQUNHLFFBQVEsVUFBVUosR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxHQUFHLENBQUMsQ0FBQztRQUNGLEtBQUssQ0FBQ0ksTUFBTSxHQUFHLEtBQUssQ0FBQ04sNERBQUksQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHO1FBQ2xDLEVBQUUsRUFBQ0ksTUFBTSxDQUFDQyxJQUFJLEtBQUssQ0FBTyxRQUMxQixNQUFNLENBQUNMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNDO1lBQUFBLEdBQUcsRUFBRSxDQUE2QjtRQUFBLENBQUM7UUFFL0QsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDWiw4REFBVSxHQUFHYyxNQUFNLENBQUMsQ0FBVztRQUNuRFgsR0FBRyxDQUFDTyxJQUFJLENBQUMsQ0FBQ0U7WUFBQUEsS0FBSztRQUFBLENBQUM7SUFFcEIsQ0FBQyxDQUFDLEtBQUssRUFBRUQsR0FBRyxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUNSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUNDO1lBQUFBLEdBQUcsRUFBRUEsR0FBRyxDQUFDSSxPQUFPO1FBQUEsQ0FBQztJQUNsRCxDQUFDO0FBQ0wsQ0FBQztBQUdELEtBQUssQ0FBQ1YsV0FBVyxVQUFVSCxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ3JDLEdBQUcsQ0FBQyxDQUFDO1FBQ0QsS0FBSyxDQUFDSSxNQUFNLEdBQUcsS0FBSyxDQUFDTiw0REFBSSxDQUFDQyxHQUFHLEVBQUVDLEdBQUc7UUFDbEMsS0FBSyxDQUFDLENBQUNhLENBQUFBLElBQUksR0FBRUMsTUFBTSxHQUFDLEdBQUdmLEdBQUcsQ0FBQ2dCLElBQUk7UUFFL0IsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDbkIsMEVBQXNCLENBQUMsQ0FBQ3FCO1lBQUFBLEdBQUcsRUFBRWQsTUFBTSxDQUFDZSxFQUFFO1FBQUEsQ0FBQyxFQUFFLENBQUNOO1lBQUFBLElBQUk7WUFBRUMsTUFBTTtRQUFBLENBQUM7UUFFN0VkLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7WUFDTmEsR0FBRyxFQUFFLENBQWlCO1lBQ3RCQyxJQUFJLEVBQUUsQ0FBQztnQkFDSFIsSUFBSTtnQkFDSkMsTUFBTTtnQkFDTlEsS0FBSyxFQUFFTixPQUFPLENBQUNNLEtBQUs7Z0JBQ3BCakIsSUFBSSxFQUFFVyxPQUFPLENBQUNYLElBQUk7WUFDdEIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLENBQUMsS0FBSyxFQUFFRyxHQUFHLEVBQUUsQ0FBQztRQUNYLE1BQU0sQ0FBQ1IsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7WUFBQUEsR0FBRyxFQUFFQSxHQUFHLENBQUNJLE9BQU87UUFBQSxDQUFDO0lBQ2xELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1hcHAxLy4vcGFnZXMvYXBpL3VzZXIvaW5kZXguanM/NTdjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcbmltcG9ydCBVc2VycyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlck1vZGVsJ1xuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XG4gICAgICAgIGNhc2UgXCJQQVRDSFwiOlxuICAgICAgICAgICAgYXdhaXQgdXBsb2FkSW5mb3IocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxuICAgICAgICAgICAgYXdhaXQgZ2V0VXNlcnMocmVxLCByZXMpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmNvbnN0IGdldFVzZXJzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxuICAgICAgIGlmKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKSBcbiAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJBdXRoZW50aWNhdGlvbiBpcyBub3QgdmFsaWRcIn0pXG5cbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2Vycy5maW5kKCkuc2VsZWN0KCctcGFzc3dvcmQnKVxuICAgICAgICByZXMuanNvbih7dXNlcnN9KVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXG4gICAgfVxufVxuXG5cbmNvbnN0IHVwbG9hZEluZm9yID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcbiAgICAgICAgY29uc3Qge25hbWUsIGF2YXRhcn0gPSByZXEuYm9keVxuXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lQW5kVXBkYXRlKHtfaWQ6IHJlc3VsdC5pZH0sIHtuYW1lLCBhdmF0YXJ9KVxuXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIG1zZzogXCJVcGRhdGUgU3VjY2VzcyFcIixcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGF2YXRhcixcbiAgICAgICAgICAgICAgICBlbWFpbDogbmV3VXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICByb2xlOiBuZXdVc2VyLnJvbGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlVzZXJzIiwiYXV0aCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVwbG9hZEluZm9yIiwiZ2V0VXNlcnMiLCJyZXN1bHQiLCJyb2xlIiwic3RhdHVzIiwianNvbiIsImVyciIsInVzZXJzIiwiZmluZCIsInNlbGVjdCIsIm1lc3NhZ2UiLCJuYW1lIiwiYXZhdGFyIiwiYm9keSIsIm5ld1VzZXIiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwiaWQiLCJtc2ciLCJ1c2VyIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/index.js\n");

/***/ }),

/***/ "(api)/./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb+srv://omer:w4RfQF0IclaVOOjL@cluster0.1yjkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0REIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztlQUVOQyxTQUFTLEdBQUcsQ0FBQztJQUN4QixFQUFFLEVBQUVELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFLENBQUM7UUFDekIsTUFBTTtJQUNWLENBQUM7SUFFRCxLQUFLLENBQUNDLEVBQUUsR0FBRyxLQUFLLENBQUNKLHVEQUFnQixDQUFDTSw0R0FBcUIsRUFBRSxDQUFDO1FBQ3RERyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtJQUM1QixDQUFDO0lBRURULFVBQVUsQ0FBQ0UsV0FBVyxHQUFHQyxFQUFFLENBQUNPLFdBQVcsQ0FBQyxDQUFDLEVBQUVDLFVBQVU7QUFDekQsQ0FBQztBQUVELGlFQUFlVixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWFwcDEvLi91dGlscy9jb25uZWN0REIuanM/YzYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBjb25uZWN0aW9uID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/connectDB.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/index.js"));
module.exports = __webpack_exports__;

})();