(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<section class=\"section\">\n    <div class=\"container-fluid\">\n        <div class=\"row content\">\n            <div class=\"col-md-5 side-img pr-0 d-none d-md-block d-lg-block\">\n                <app-side-section></app-side-section>\n            </div>\n            <div class=\"col-md-7 pt-5\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</section>\n\n<app-modal></app-modal>\n\n<app-modal-document></app-modal-document>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/document/document.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/document/document.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row contain-form\">\n        <div>\n            <div class=\"row col-10\">\n            <div class=\"col-md-3 col-2 p-0 header-text\">\n                <hr class=\"point\" />\n            </div>\n            <div class=\"col-md-8 col-8 header-text\">\n                Upload Documents\n            </div>\n        </div>\n            <div class=\"col-md-10 pl-0 pr-5\">\n                <span class=\"pre-text\">Upload the following documents to get the most out of banking with\n                    us. You can upload a few or choose to <i class=\"it-ls\">skip and upload\n                        later.</i></span>\n            </div>\n            <div class=\"col-md-10 pt-4 pb-4\">\n                <div class=\"row opt\">\n                    <div class=\"col-1 d-flex align-items-center\"><img src=\"assets/img/Path 15449.png\"></div>\n                    <div class=\"col\"><span class=\"note\">Supported upload format : JPEG, PNG & PDF, Maximum file size allowed\n                            is 2MB\n                        </span></div>\n                </div>\n            </div>\n\n\n            <div class=\"col-md-9 mt-5 d-md-none d-sm-block\">\n                <div class=\"row\">\n                    <div class=\"text-center select-box\">\n                        <button class=\"btn btn-outline btn-custom\" data-toggle=\"modal\" data-target=\"#exampleModalCenter1\">Passport Photograph</button>\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"9.887\" viewBox=\"0 0 16 9.887\">\n                            <defs>\n                                <style>\n                                    .a {\n                                        fill: #101010;\n                                    }\n                                </style>\n                            </defs>\n                            <path class=\"a\" d=\"M27.057-22.137,20.943-28.25l6.113-6.113L25.17-36.25l-8,8,8,8Z\"\n                                transform=\"translate(36.25 27.057) rotate(-90)\" />\n                        </svg>\n                    </div>\n    \n                    <div class=\"text-center select-box mt-3 pt-5 pb-5\">\n                        <div class=\"text-center\">\n                            <img src=\"assets/img/upload.png\">\n                            <h6 class=\"pt-3\">Drag and drop an image file here</h6>\n                            <h6 class=\"pt-2 pb-2\">OR</h6>\n                            <button class=\"btn btn-outline-primary s-b-3\">Browse</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-10 mt-5 d-none d-md-block p-0\">\n                 <table class=\"table table-half\">\n                                    <tbody>\n                                        <tr>\n                                            <td class=\"table-first\"><input type=\"radio\" name=\"doc\" /> &nbsp; &nbsp; Passport\n                                                Photograph</td>\n                                            <td rowspan=\"4\" class=\"align-middle\">\n                                                <div class=\"text-center\">\n                                                    <div class=\"\">\n                                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"86.577\" height=\"57.718\"\n                                                            viewBox=\"0 0 86.577 57.718\">\n                                                            <defs>\n                                                                <style>\n                                                                    .a {\n                                                                        fill: #b1b1b1;\n                                                                    }\n                                                                </style>\n                                                            </defs>\n                                                            <path class=\"a\"\n                                                                d=\"M69.821-18.229A27.058,27.058,0,0,0,43.289-40,27.078,27.078,0,0,0,19.3-25.444,21.656,21.656,0,0,0,0-3.926,21.638,21.638,0,0,0,21.644,17.718h46.9A18.044,18.044,0,0,0,86.577-.319,17.99,17.99,0,0,0,69.821-18.229ZM50.5-7.533V6.9H36.074V-7.533H25.252L43.289-25.57,61.326-7.533Z\"\n                                                                transform=\"translate(0 40)\" />\n                                                        </svg>\n                                                        <br /><br />\n                                                        Drag and drop an image file here\n                                                        <br />\n                                                        OR<br />\n                                                        <button class=\"btn btn-outline-primary s-b-3\">Browse</button>\n                                                    </div>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"td-small\"><input type=\"radio\" name=\"doc\" /> &nbsp; &nbsp; Utility\n                                                Bill</td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"td-small\"><input type=\"radio\" name=\"doc\" /> &nbsp; &nbsp; Valid ID\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"td-small\"><input type=\"radio\" name=\"doc\" /> &nbsp; &nbsp; Signature\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n            </div>\n\n            <div class=\"col-md-9\">\n                <div class=\"row d-flex justify-content-between mt-5\">\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-md pr-5 pl-5 s-b-2\" (click)=\"goToReview()\">Skip</button>\n                    <button type=\"button\" class=\"btn btn-primary pr-4 pl-4 text-center btn-lg s-b\" (click)=\"goToReview()\">Proceed &nbsp; > &nbsp;\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header d-none d-md-block d-lg-block\">\n        <nav class=\"navbar navbar-light container \">\n            <div class=\"row w-100\">\n                <div  class=\"col-md-5\">\n                    <a class=\"navbar-brand\" href=\"#\">\n                        <img src=\"assets/img/Image 2@2x.png\" class=\"img-responsive\" width=\"104px\" height=\"46px\">\n                    </a>\n                </div>\n                <div class=\"col-md-7 tab-col\">\n                    <div class=\"row h-100\">\n                       <div class=\"col-md-4 pl-4 nav-tab d-flex align-items-center\" routerLinkActive=\"nav-tab-active\"><a [routerLink]=\"['/personal-information']\"><span><input type=\"radio\" name=\"option\" value=\"personal\" class=\"radio-hide\"><img src=\"assets/img/marked.png\" class=\"marked responsive-img d-none\"/> <span class=\"nav-tab-text\">Personal Information</span></span></a></div>\n                        <div class=\"col-md-4 pl-4 nav-tab d-flex align-items-center\" routerLinkActive=\"nav-tab-active\"><a [routerLink]=\"['/documents-upload']\"  ><span><input type=\"radio\" name=\"option\" value=\"document\"> <span class=\"nav-tab-text\">Document Upload</span></span></a></div>\n                        <div class=\"col-md-4 pl-4 nav-tab d-flex align-items-center\" routerLinkActive=\"nav-tab-active\"><a [routerLink]=\"['/review-details']\"><span><input type=\"radio\" name=\"option\" value=\"upload\"> <span class=\"nav-tab-text\">Review and Submit</span></span></a></div>\n                    </div>\n                </div>\n            </div> \n        </nav>        \n    </div>\n\n    <div class=\"container-fluid logo-section d-sm-block d-md-none\">\n        <div class=\"row d-flex justify-content-center\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <img src=\"assets/img/Image 2@2x.png\" class=\"img-responsive\" width=\"104px\" height=\"46px\">\n            </a>\n        </div>\n    </div>\n\n    <div class=\"container-fluid d-sm-block d-md-none\">\n        <div class=\"second-nav\">\n            <div class=\"row h-100 nav nav-tabs d-none\" id=\"myTab\" role=\"tablist\">\n                <div class=\"col nav-tab-active pl-3 d-flex align-items-center\" role=\"button\"><a id=\"personal-tab\" data-toggle=\"tab\" routerLink=\"personal-information\"><span><input type=\"radio\" name=\"option\" value=\"personal\"> <span class=\"nav-tab-text\">Personal Information</span></span></a></div>\n                <div class=\"col-2 pr-0 text-right d-flex align-items-center\"><a id=\"document-tab\" data-toggle=\"tab\" routerLink=\"document-upload\"><span><input type=\"radio\" name=\"option\" value=\"document\"> <span class=\"nav-tab-text\">2</span></span></a></div>\n                <div class=\"col-2 pr-0 text-right d-flex align-items-center\" id=\"review-tab\" data-toggle=\"tab\" routerLink=\"review-details\"><span><input type=\"radio\" name=\"option\" value=\"review\"> <span class=\"nav-tab-text\">3</span></span></div>\n            </div>\n            <div class=\"row h-100 w-100 nav nav-tabs\" id=\"myTab\">\n                <div class=\"col p-tab nav-tab-active pl-3 d-flex align-items-center\" id=\"personal-tab\" role=\"button\" (click)=\"goToRoute('personal-information')\"><span><input type=\"radio\" name=\"option\" value=\"personal\"> <span class=\"nav-tab-text\">{{ tabName1 }}</span></span></div>\n                <div class=\"col-3 d-tab pr-0 text-right d-flex align-items-center\" id=\"document-tab\" role=\"button\" (click)=\"goToRoute('documents-upload')\"><span><input type=\"radio\" name=\"option\" value=\"document\"> <span class=\"nav-tab-text\">{{ tabName2 }}</span></span></div>\n                <div class=\"col-3 r-tab pr-0 text-right d-flex align-items-center\" id=\"review-tab\" role=\"button\" (click)=\"goToRoute('review-details')\"><span><input type=\"radio\" name=\"option\" value=\"review\"> <span class=\"nav-tab-text\">{{ tabName3 }}</span></span></div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal-document/modal-document.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal-document/modal-document.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"exampleModalCenter1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog1\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3 class=\"pl-2\" style=\"font-family:'Campton SemiBold'; font-size:1em; color:#003366\">Document Type</h3>\n            </div>\n            <div class=\"modal-body pl-2 items\">\n                <div class=\"p-4\"><img src=\"assets/img/radio.png\" />&nbsp; &nbsp; Utility Bill <small class=\"text-muted\">Uploaded</small></div>\n                <div class=\"p-4\"><input type=\"radio\"/>&nbsp;&nbsp; Signature <small class=\"text-muted\"></small></div>\n                <div class=\"p-4\"><img src=\"assets/img/radio.png\" />&nbsp;&nbsp; Passport Photograph <small class=\"text-muted\">Uploaded</small></div>\n                <div class=\"pl-4 pb-0 pt-4\"><img src=\"assets/img/radio.png\" />&nbsp;&nbsp; Valid ID  &nbsp;<small class=\"text-muted extra\">Uploaded</small></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-custom\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-headerl\">\n                <div class=\"row d-flex justify-content-between ml-0 p-3\">\n                    <span class=\"bg-left\"><img src=\"assets/img/left.png\"\n                            width=\"70%\" /></span>\n                    <span class=\"d-flex align-items-end\"><img src=\"assets/img/logo.png\" width=\"80%\" class=\"modal-logo\"></span>\n                    <span class=\"bg-right\"><img\n                            src=\"assets/img/right.png\" width=\"70%\" /></span>\n                </div>\n            </div>\n            <div class=\"row d-flex justify-content-center mt-3\">\n                <div class=\"text-center pb-5\">\n                    <div class=\"md-content flex-column d-flex text-center\">\n                    <h3 class=\"modal-title-text\">Welcome to Kops,</h3>\n                    <p class=\"modal-sub-text\">Your account number has been generated successfully</p>\n                    <p class=\"modal-account-text\">1020384895</p>\n                    </div>\n                    <button class=\"btn btn-outline-danger btn-custom\">View our product offerings</button>\n                </div>\n            </div>\n            <div class=\"modal-footer\" style=\"background-color: #F4F8FD; \">\n                <div class=\"row w-100\">\n                    <div class=\"col-md-6 col-sm-6 bg-blue d-flex align-items-center justify-content-center\">\n                        <span class=\"modal-footer-text\">Continue banking on our mobile platforms</span>\n                    </div>\n                    <div class=\"col-md-6 col-sm-6 d-flex justify-content-end\">\n                        <div class=\"download\">\n                            <img class=\"img-fluid pr-1 app-icon\" src=\"assets/img/google.png\" alt=\"google-btn\" width=\"40%\" />\n                            <img class=\"img-fluid pl-1 app-icon\" src=\"assets/img/ios.png\" alt=\"ios-btn\" width=\"40%\" />\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-sm-6 d-block\">\n                        <div class=\"download-m\">\n                            <img class=\"img-fluid pr-1 app-icon\" src=\"assets/img/google.png\" alt=\"google-btn\" width=\"100%\" />\n                            <img class=\"img-fluid pl-1 app-icon\" src=\"assets/img/ios.png\" alt=\"ios-btn\" width=\"100%\" />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/personal/personal.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/personal/personal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row contain-form\">\n        <form class=\"\">\n            <div class=\"form-row align-items-center\">\n                <span class=\"col-md-2 col-2 header-text\">\n                    <hr class=\"point\" /></span>\n                <span class=\"col-md-10 col-10\">\n                    <h3 class=\"header-text\">Confirm your Bank Details</h3>\n                </span>\n                <span class=\"pre-text ml-1\">Welcome to Globus Bank, we're so glad you're ready to join\n                    us.</span>\n            </div>\n            <br />\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-9\">\n                    <label for=\"Verification\">Bank Verification Number</label>\n                    <div class=\"input-group mb-2 mr-sm-2 bvn\">\n                        <input type=\"text\" class=\"special-input form-control\" placeholder=\"2294775371\">\n                        <div class=\"input-group-prepend pt-1 pb-1\">\n                            <button type=\"button\" class=\"btn btn-white mr-2 btn-sm\">Change</button>\n                            <!-- <button type=\"button\" class=\"btn btn-secondary btn-sm\">Small button</button> -->\n                            <!-- <div role=\"button\" style=\"background-color: gray;\">Change</div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group offset-md-3\"></div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"firstname\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Bola\">\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"inputPassword4\">Middle Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Omole\">\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"inputPassword4\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Omole\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"inputPassword4\">Gender</label>\n                <br />\n                <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\"\n                        id=\"inlineRadio1\" value=\"option1\">\n                    <label class=\"form-check-label\" for=\"inlineRadio1\">Male</label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\"\n                        id=\"inlineRadio2\" value=\"option2\">\n                    <label class=\"form-check-label\" for=\"inlineRadio2\">Female</label>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">\n                    <label for=\"inputCity\">Phone Number</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputCity\" placeholder=\"08057784848\">\n                </div>\n                <div class=\"form-group offset-md-1\"></div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"inputState\">Date of Birth</label>\n                    <input class=\"form-control\" type=\"date\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-9\">\n                    <label for=\"inputAddress2\">Email</label>\n                    <input type=\"email\" class=\"form-control\" id=\"inputAddress2\"\n                        placeholder=\"bolaomole@gmail.com\">\n                </div>\n                <div class=\"form-group col-md-9\">\n                    <label for=\"inputAddress2\">Residential Address</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputAddress2\"\n                        placeholder=\"12, Adeyemo Alakija street, Victoria Island, Lagos\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group offset-4\"></div>\n                <div class=\"form-group col-sm-5 d-flex justify-content-end\">\n                    <button type=\"button\" class=\"btn btn-primary btn-lg s-b\" (click)=\"goToDocumentUpload()\">Accept & Submit &nbsp; >\n                        &nbsp; </button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/review/review.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/review/review.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row contain-form\">\n        <div class=\"row mt-4\">\n            <div class=\"col-md-10 pb-5\">\n                <h4 class=\"title-name\">Personal Information</h4>\n                <div class=\"container details-box\">\n                    <div class=\"row d-flex flex-row edit-button-contain\">\n                        <button class=\"btn btn-md s-b-4\" style=\"background-color: #DDEEFE ;\"> <img src=\"assets/img/pencil.png\"\n                                width=\"17%\" /> &nbsp; Edit&nbsp;</button>\n                    </div>\n                    <div class=\"pt-3 pl-3 details\">\n                        <div class=\"row mb-3\">\n                            <div class=\"col-md-5 term\">BVN </div>\n                            <div class=\"col-md-7 value\">2233435335</div>\n                        </div>\n                        <div class=\"row mb-3\">\n                            <div class=\"col-md-5 term\">Name</div>\n                            <div class=\"col-md-7 value\">Bola Michael Omole</div>\n                        </div>\n                        <div class=\"row mb-3\">\n                            <div class=\"col-md-5 term\">Gender</div>\n                            <div class=\"col-md-7 value\">Male</div>\n                        </div>\n                        <div class=\"row mb-3\">\n                            <div class=\"col-md-5 term\">Date of Birth</div>\n                            <div class=\"col-md-7 value\">14th March, 1989</div>\n                        </div>\n                        <div class=\"row mb-3\">\n                            <div class=\"col-md-5 term\">Phone Number </div>\n                            <div class=\"col-md-7 value\">+2348143647471</div>\n                        </div>\n                        <div class=\"row mb-3\">\n                            <div class=\"col-md-5 term\">Email Address </div>\n                            <div class=\"col-md-7 value\">bolaomole@gmail.com</div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 term\">Residential Address</div>\n                            <div class=\"col-md-7 value\">6, Adeyemo Alakija street, Victoria Island, Lagos</div>\n                        </div>                  \n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-10 mt-4 pb-5\">\n                <h4 class=\"title-name\">Document Upload</h4>\n                <div class=\"container details-box\" >\n                    <div class=\"row d-flex flex-row edit-button-contain\">\n                        <button class=\"btn btn-md s-b-4\" style=\"background-color: #DDEEFE ;\"> <img src=\"assets/img/pencil.png\"\n                                width=\"17%\" /> &nbsp; Edit&nbsp;</button>\n                    </div>\n                    <div class=\"pt-3 pl-3 row\">\n                        <ul class=\"my-list list-group ml-3\">\n                            <li><img src=\"assets/img/radio.png\"/>&nbsp;Photograph</li>\n                            <li><input type=\"radio\" name=\"docs\"/>&nbsp;Utility Bill</li>\n                            <li><input type=\"radio\" name=\"docs\"/>&nbsp;Signature</li>\n                            <li><input type=\"radio\" name=\"docs\"/>&nbsp;Valid ID</li>\n                        </ul>  \n                    </div>\n                </div>\n            </div>\n           \n          </div>\n          <div class=\"col-md-9\">\n            <div class=\"row d-flex justify-content-between mt-2\">\n                <button type=\"button\" class=\"btn btn-outline-primary btn-md pr-5 pl-5 s-b-2\">Skip</button>\n                <button type=\"button\" class=\"btn btn-primary pr-4 pl-4 text-center btn-lg s-b\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Proceed &nbsp; > &nbsp;\n                </button>\n            </div>\n        </div>\n </div>\n    </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side-section/side-section.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side-section/side-section.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"callout float-right\">\n                        <div class=\"callout-main\">\n                            <h2>Enjoy all the <br>conveniences of banking <br>at your fingertips</h2>\n                        </div>\n                        <div class=\"callout-sub\">\n                            <p>Our banking services now comes to you. Call our <br>advisors and they will bring you all our\n                                solutions</p>\n                        </div>\n                    </div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document/document.component */ "./src/app/document/document.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");






var routes = [
    { path: '', redirectTo: 'personal-information', pathMatch: 'full' },
    { path: 'personal-information', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__["PersonalComponent"] },
    { path: 'documents-upload', component: _document_document_component__WEBPACK_IMPORTED_MODULE_4__["DocumentComponent"] },
    { path: 'review-details', component: _review_review_component__WEBPACK_IMPORTED_MODULE_5__["ReviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\r\n    background-color: red !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kops';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _side_section_side_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-section/side-section.component */ "./src/app/side-section/side-section.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/personal/personal.component.ts");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./document/document.component */ "./src/app/document/document.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _modal_document_modal_document_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-document/modal-document.component */ "./src/app/modal-document/modal-document.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _side_section_side_section_component__WEBPACK_IMPORTED_MODULE_6__["SideSectionComponent"],
                _personal_personal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalComponent"],
                _document_document_component__WEBPACK_IMPORTED_MODULE_8__["DocumentComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_9__["ReviewComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                _modal_document_modal_document_component__WEBPACK_IMPORTED_MODULE_11__["ModalDocumentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/document/document.component.css":
/*!*************************************************!*\
  !*** ./src/app/document/document.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-custom {\n    color: #003366;\n    font-family: 'Campton SemiBold';\n    font-size: 16px;\n    line-height: 22px;\n}\n\n.note {\n    font-family: 'Campton Medium';\n    font-size: 12px;\n    line-height: 16px;\n    color: #1A1A1A;\n}\n\n.pre-text{\n    text-align: left;\n    font-size: 16px;\n    line-height: 19px;\n    font-family: 'Campton Book';\n    letter-spacing: 0;\n    color: #1A1A1A;\n}\n\n.marked{\n    display: visible !important;\n}\n\n.radio-hide{\n    background-color: red;;\n}\n\n.opt{\n    background-color:rgba(235, 34, 50, 0.2);\n    padding: 5px;\n    background-repeat: no-repeat;\n    height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY3VzdG9tIHtcbiAgICBjb2xvcjogIzAwMzM2NjtcbiAgICBmb250LWZhbWlseTogJ0NhbXB0b24gU2VtaUJvbGQnO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLm5vdGUge1xuICAgIGZvbnQtZmFtaWx5OiAnQ2FtcHRvbiBNZWRpdW0nO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogIzFBMUExQTtcbn1cblxuLnByZS10ZXh0e1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ2FtcHRvbiBCb29rJztcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzFBMUExQTtcbn1cblxuLm1hcmtlZHtcbiAgICBkaXNwbGF5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4ucmFkaW8taGlkZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7O1xufVxuXG4ub3B0e1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzUsIDM0LCA1MCwgMC4yKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/document/document.component.ts":
/*!************************************************!*\
  !*** ./src/app/document/document.component.ts ***!
  \************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(router) {
        this.router = router;
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent.prototype.goToReview = function () {
        this.router.navigate(['review-details']);
    };
    DocumentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! raw-loader!./document.component.html */ "./node_modules/raw-loader/index.js!./src/app/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.css */ "./src/app/document/document.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.header {\n  box-shadow: 0 4px 4px 0px rgba(0,0,0,0.25);\n}\n\n.nav-tab-text {\n  font-size: 0.8em;\n  padding-left: 5px;\n  color: #003366;\n  font-family: 'Campton SemiBold';\n}\n\n.nav-tab-active {\n  border-bottom: 2.5px #003366 solid;\n  /* height: 100%; */\n}\n\n.tab-col {\n  margin-bottom: -0.5em;\n}\n\n.second-nav {\n  height: 60px;\n}\n\n.logo-section {\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n/* Styles */\n\n.header-text{\n  text-align: left;\n  font-size: 1.1em;\n  font-family: 'Campton Bold';\n  letter-spacing: 0;\n  color: #1A1A1A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXIge1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggMHB4IHJnYmEoMCwwLDAsMC4yNSk7XG59XG5cbi5uYXYtdGFiLXRleHQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgY29sb3I6ICMwMDMzNjY7XG4gIGZvbnQtZmFtaWx5OiAnQ2FtcHRvbiBTZW1pQm9sZCc7XG59XG5cbi5uYXYtdGFiLWFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDIuNXB4ICMwMDMzNjYgc29saWQ7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbn1cblxuLnRhYi1jb2wge1xuICBtYXJnaW4tYm90dG9tOiAtMC41ZW07XG59XG5cbi5zZWNvbmQtbmF2IHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubG9nby1zZWN0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4vKiBTdHlsZXMgKi9cblxuLmhlYWRlci10ZXh0e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LWZhbWlseTogJ0NhbXB0b24gQm9sZCc7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzFBMUExQTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, location, route) {
        this.router = router;
        this.location = location;
        this.route = route;
        this.tabName1 = '1';
        this.tabName2 = '2';
        this.tabName3 = '3';
        // console.log(window.location.href);
        this.url = window.location.href.slice(22);
        // console.log(this.url);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.url = this.router.url;
        // this.name = this.route;
        this.setDefault(this.url);
    };
    HeaderComponent.prototype.goToRoute = function (route) {
        // console.log(this.route.url);
        this.router.navigate([route]);
        switch (route) {
            case 'personal-information':
                this.tabName1 = 'Personal Information';
                this.tabName2 = '2';
                this.tabName3 = '3';
                if ($('.p-tab').hasClass('col') == false) {
                    $('.p-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
                    $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                    $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                }
                break;
            case 'documents-upload':
                this.tabName2 = 'Documents Upload';
                this.tabName1 = '1';
                this.tabName3 = '3';
                console.log($('.d-tab').hasClass('col'));
                if ($('.d-tab').hasClass('col') == false) {
                    $('.d-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
                    ;
                    $('.p-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                    $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                }
                break;
            case 'review-details':
                this.tabName3 = 'Review and Submit';
                this.tabName1 = '1';
                this.tabName2 = '2';
                console.log($('.r-tab').hasClass('col'));
                if ($('.r-tab').hasClass('col') == false) {
                    $('.r-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
                    $('.p-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                    $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                }
                break;
            default:
                break;
        }
    };
    HeaderComponent.prototype.setDefault = function (route) {
        switch (route) {
            case 'personal-information':
                this.tabName1 = 'Personal Information';
                this.tabName2 = '2';
                this.tabName3 = '3';
                if ($('.p-tab').hasClass('col') == false) {
                    $('.p-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
                    $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                    $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                }
                break;
            case 'documents-upload':
                this.tabName2 = 'Documents Upload';
                this.tabName1 = '1';
                this.tabName3 = '3';
                console.log($('.d-tab').hasClass('col'));
                if ($('.d-tab').hasClass('col') == false) {
                    $('.d-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
                    $('.p-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                    $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                }
                break;
            case 'review-details':
                this.tabName3 = 'Review and Submit';
                this.tabName1 = '1';
                this.tabName2 = '2';
                console.log($('.r-tab').hasClass('col'));
                if ($('.r-tab').hasClass('col') == false) {
                    $('.r-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
                    $('.p-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                    $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                }
                break;
            default:
                this.tabName1 = 'Personal Information';
                this.tabName2 = '2';
                this.tabName3 = '3';
                if ($('.p-tab').hasClass('col') == false) {
                    $('.p-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
                    $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                    $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
                }
                break;
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modal-document/modal-document.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modal-document/modal-document.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-dialog1 {\n    position: absolute;\n    /* top:0; */\n    right:0;\n    left:0;\n    bottom:0;\n    /* height: 100vh; */\n }\n\n .modal-open .modal {\n    background-color: rgba(0, 51, 102, 0.81) !important;\n}\n\n .items{\n    font-family: 'Campton Regular';\n    font-size:1em; \n    color:#003366\n}\n\n .extra{\n    color:rgba(0,51,201, 0.39);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtZG9jdW1lbnQvbW9kYWwtZG9jdW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRO0lBQ1IsbUJBQW1CO0NBQ3RCOztDQUVBO0lBQ0csbURBQW1EO0FBQ3ZEOztDQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYjtBQUNKOztDQUNBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtZG9jdW1lbnQvbW9kYWwtZG9jdW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1kaWFsb2cxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogdG9wOjA7ICovXG4gICAgcmlnaHQ6MDtcbiAgICBsZWZ0OjA7XG4gICAgYm90dG9tOjA7XG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiB9XG5cbiAubW9kYWwtb3BlbiAubW9kYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNTEsIDEwMiwgMC44MSkgIWltcG9ydGFudDtcbn1cblxuLml0ZW1ze1xuICAgIGZvbnQtZmFtaWx5OiAnQ2FtcHRvbiBSZWd1bGFyJztcbiAgICBmb250LXNpemU6MWVtOyBcbiAgICBjb2xvcjojMDAzMzY2XG59XG4uZXh0cmF7XG4gICAgY29sb3I6cmdiYSgwLDUxLDIwMSwgMC4zOSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/modal-document/modal-document.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modal-document/modal-document.component.ts ***!
  \************************************************************/
/*! exports provided: ModalDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDocumentComponent", function() { return ModalDocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalDocumentComponent = /** @class */ (function () {
    function ModalDocumentComponent() {
    }
    ModalDocumentComponent.prototype.ngOnInit = function () {
    };
    ModalDocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-document',
            template: __webpack_require__(/*! raw-loader!./modal-document.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal-document/modal-document.component.html"),
            styles: [__webpack_require__(/*! ./modal-document.component.css */ "./src/app/modal-document/modal-document.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalDocumentComponent);
    return ModalDocumentComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-open .modal {\n    background-color: rgba(0, 51, 102, 0.81) !important;\n}\n\n.modal-dialog {\n    max-width: 754px!important;\n}\n\n.bg-left {\n    margin-left:-50px; \n    margin-top:-40px;\n    overflow: hidden;\n    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n}\n\n.bg-right {\n    margin-right:-55px; \n    margin-top:-20px; \n    overflow: hidden;\n    -webkit-transform: matrix(0.87, 0.5, -0.5, 0.87, 0, 0);\n            transform: matrix(0.87, 0.5, -0.5, 0.87, 0, 0);\n}\n\n.modal-title-text {\n    font-family: 'Campton SemiBold';\n    font-size: 28px;\n    line-height: 39px;\n    color: #1A1A1A;\n}\n\n.modal-sub-text {\n    font-family: 'Campton Book';\n    font-size: 16px;\n    line-height: 22px;\n    color: #1A1A1A;\n}\n\n.modal-account-text {\n    font-family: 'Campton Bold';\n    font-size: 36px;\n    line-height: 49px;\n    color: #1A1A1A;\n}\n\n.modal-footer-text {\n    padding-bottom: 15px;\n    font-family: 'Campton Book';\n    font-size: 16px;\n    line-height: 22px;\n    color: #1A1A1A;\n}\n\n.btn-custom {\n    color: #FF0032;\n    border: 1px solid #FF0032;\n    border-radius: 3px;\n    font-family: 'Campton SemiBold';\n    font-size: 18px;\n    padding: 15px 27px;\n}\n\n.md-content {\n    padding-right: 15%;\n    padding-left: 15%;\n}\n\n.app-icon {\n    /* width: 60%; */\n}\n\n.download-m {\n    display: flex;\n    justify-content: center;\n}\n\n.download {\n    display: none;\n}\n\n@media (min-width: 600px) {\n    .btn-custom {\n        color: #FF0032;\n        border: 1px solid #FF0032;\n        border-radius: 3px;\n        font-family: 'Campton SemiBold';\n        font-size: 18px;\n        padding: 15px 27px;\n    }\n    .md-content {\n        padding-right: 0;\n        padding-left: 0;\n    }\n\n    .modal-logo {\n        padding-top: 40px;\n    }\n\n    .modal-footer-text {\n        padding-bottom: 0px;\n    }\n\n    .download {\n        justify-content: flex-end;\n        display: flex;\n    }\n\n    .download-m {\n        display: none;\n    }\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHdEQUFnRDtZQUFoRCxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzREFBOEM7WUFBOUMsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsK0JBQStCO1FBQy9CLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1vcGVuIC5tb2RhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA1MSwgMTAyLCAwLjgxKSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDc1NHB4IWltcG9ydGFudDtcbn1cblxuLmJnLWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0Oi01MHB4OyBcbiAgICBtYXJnaW4tdG9wOi00MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoMC43MSwgMC43MSwgLTAuNzEsIDAuNzEsIDAsIDApO1xufVxuXG4uYmctcmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDotNTVweDsgXG4gICAgbWFyZ2luLXRvcDotMjBweDsgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgwLjg3LCAwLjUsIC0wLjUsIDAuODcsIDAsIDApO1xufVxuXG4ubW9kYWwtdGl0bGUtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdDYW1wdG9uIFNlbWlCb2xkJztcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDM5cHg7XG4gICAgY29sb3I6ICMxQTFBMUE7XG59XG5cbi5tb2RhbC1zdWItdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdDYW1wdG9uIEJvb2snO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzFBMUExQTtcbn1cblxuLm1vZGFsLWFjY291bnQtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6ICdDYW1wdG9uIEJvbGQnO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbiAgICBjb2xvcjogIzFBMUExQTtcbn1cblxuLm1vZGFsLWZvb3Rlci10ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBmb250LWZhbWlseTogJ0NhbXB0b24gQm9vayc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjMUExQTFBO1xufVxuXG4uYnRuLWN1c3RvbSB7XG4gICAgY29sb3I6ICNGRjAwMzI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGMDAzMjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDYW1wdG9uIFNlbWlCb2xkJztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMTVweCAyN3B4O1xufVxuXG4ubWQtY29udGVudCB7XG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xuICAgIHBhZGRpbmctbGVmdDogMTUlO1xufVxuXG4uYXBwLWljb24ge1xuICAgIC8qIHdpZHRoOiA2MCU7ICovXG59XG5cbi5kb3dubG9hZC1tIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZG93bmxvYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5idG4tY3VzdG9tIHtcbiAgICAgICAgY29sb3I6ICNGRjAwMzI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjAwMzI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDYW1wdG9uIFNlbWlCb2xkJztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDI3cHg7XG4gICAgfVxuICAgIC5tZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5tb2RhbC1sb2dvIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgfVxuXG4gICAgLm1vZGFsLWZvb3Rlci10ZXh0IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICAuZG93bmxvYWQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5kb3dubG9hZC1tIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/personal/personal.component.css":
/*!*************************************************!*\
  !*** ./src/app/personal/personal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/personal/personal.component.ts":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(router) {
        this.router = router;
    }
    PersonalComponent.prototype.ngOnInit = function () {
    };
    PersonalComponent.prototype.goToDocumentUpload = function () {
        this.router.navigate(["document-upload"]);
    };
    PersonalComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personal',
            template: __webpack_require__(/*! raw-loader!./personal.component.html */ "./node_modules/raw-loader/index.js!./src/app/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.css */ "./src/app/personal/personal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Update Page**/\n.title-name {\n    font-family: 'Campton Book';\n    font-size: 16px;\n    line-height: 22px;\n    color: #1A1A1A;\n}\n.details-box {\n    border:0.6px solid #707070; \n    position: relative;\n    padding-bottom: 30px;\n}\n.edit-button-contain {\n    position: absolute;\n    right: 0; \n    margin-right: 10px;\n    margin-top: 15px;\n}\n.term{\n    color: #1A1A1A;\n    font-family: 'Campton SemiBold';\n    font-size: 14px;\n    line-height: 19px;\n}\n.value{\n    color: #1A1A1A;\n    font-family: 'Campton Book';\n    font-size: 14px;\n    line-height: 19px;\n}\n.my-list{\n    list-style-type: none;\n}\ninput[type='radio'] {\n    border: 1px solid #003366;\n  }\n.s-b-4{\n    border-radius: 0;\n    font-family: 'Campton Medium';\n    /* width: 30%; */\n    font-size: 0.9em;\n    color: #003366;\n}\n@media (min-width: 600px) {\n    .details {\n        margin-top: 40px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDZjtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHlCQUF5QjtFQUMzQjtBQUNGO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlVwZGF0ZSBQYWdlKiovXG4udGl0bGUtbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDYW1wdG9uIEJvb2snO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzFBMUExQTtcbn1cblxuLmRldGFpbHMtYm94IHtcbiAgICBib3JkZXI6MC42cHggc29saWQgIzcwNzA3MDsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZWRpdC1idXR0b24tY29udGFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwOyBcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRlcm17XG4gICAgY29sb3I6ICMxQTFBMUE7XG4gICAgZm9udC1mYW1pbHk6ICdDYW1wdG9uIFNlbWlCb2xkJztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG4udmFsdWV7XG4gICAgY29sb3I6ICMxQTFBMUE7XG4gICAgZm9udC1mYW1pbHk6ICdDYW1wdG9uIEJvb2snO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLm15LWxpc3R7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAzMzY2O1xuICB9XG4ucy1iLTR7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LWZhbWlseTogJ0NhbXB0b24gTWVkaXVtJztcbiAgICAvKiB3aWR0aDogMzAlOyAqL1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgY29sb3I6ICMwMDMzNjY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/side-section/side-section.component.css":
/*!*********************************************************!*\
  !*** ./src/app/side-section/side-section.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtc2VjdGlvbi9zaWRlLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/side-section/side-section.component.ts":
/*!********************************************************!*\
  !*** ./src/app/side-section/side-section.component.ts ***!
  \********************************************************/
/*! exports provided: SideSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideSectionComponent", function() { return SideSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideSectionComponent = /** @class */ (function () {
    function SideSectionComponent() {
    }
    SideSectionComponent.prototype.ngOnInit = function () {
    };
    SideSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-section',
            template: __webpack_require__(/*! raw-loader!./side-section.component.html */ "./node_modules/raw-loader/index.js!./src/app/side-section/side-section.component.html"),
            styles: [__webpack_require__(/*! ./side-section.component.css */ "./src/app/side-section/side-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideSectionComponent);
    return SideSectionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Olagoke\Desktop\Ola\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map