(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["turno-turno-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/turno/turno.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/turno/turno.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTurnoTurnoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-button (click)=\"navigateBack()\">\n\t\t\t\t<ion-icon name=\"arrow-back\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Solicitar Turno</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"background\">\n\t<form [formGroup]=\"turno\" (ngSubmit)=\"saveTurno()\">\n    <ion-item>\n\t\t\t<ion-label position=\"stacked\">Fecha:</ion-label>\n\t\t\t<ion-datetime cancelText=\"Cancelar\" doneText=\"Listo\" display-format=\"DD/MM/YYYY\" picker-format=\"DD/MM/YYYY\" formControlName=\"fecha\" required></ion-datetime>\n\t\t</ion-item>\n    <ion-item>\n\t\t\t<ion-label position=\"stacked\">Tipo de Turno:</ion-label>\n\t\t\t<ion-select value=\"URGENCIA\" okText=\"Listo\" cancelText=\"Cancelar\" formControlName=\"tipo\">\n        \t\t<ion-select-option value=\"URGENCIA\">URGENCIA</ion-select-option>\n        \t\t<ion-select-option value=\"PROGRAMADA\">PROGRAMADA</ion-select-option>\n      \t\t</ion-select>\n    </ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\">Nombre:</ion-label>\n\t\t\t<ion-input type=\"text\" formControlName=\"nombre\" required></ion-input>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label position=\"stacked\">Descripci&oacute;n:</ion-label>\n\t\t\t<ion-textarea formControlName=\"detalle\" required></ion-textarea>\n    </ion-item>\n    <ion-button type=\"submit\" expand=\"full\" [disabled]=\"!turno.valid\">Solicitar</ion-button>\n\t</form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/model/Turno.ts":
    /*!********************************!*\
      !*** ./src/app/model/Turno.ts ***!
      \********************************/

    /*! exports provided: Turno */

    /***/
    function srcAppModelTurnoTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Turno", function () {
        return Turno;
      });

      var Turno = function Turno() {
        _classCallCheck(this, Turno);
      };
      /***/

    },

    /***/
    "./src/app/turno/turno-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/turno/turno-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: TurnoPageRoutingModule */

    /***/
    function srcAppTurnoTurnoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TurnoPageRoutingModule", function () {
        return TurnoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _turno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./turno.page */
      "./src/app/turno/turno.page.ts");

      var routes = [{
        path: '',
        component: _turno_page__WEBPACK_IMPORTED_MODULE_3__["TurnoPage"]
      }];

      var TurnoPageRoutingModule = function TurnoPageRoutingModule() {
        _classCallCheck(this, TurnoPageRoutingModule);
      };

      TurnoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TurnoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/turno/turno.module.ts":
    /*!***************************************!*\
      !*** ./src/app/turno/turno.module.ts ***!
      \***************************************/

    /*! exports provided: TurnoPageModule */

    /***/
    function srcAppTurnoTurnoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TurnoPageModule", function () {
        return TurnoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _turno_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./turno-routing.module */
      "./src/app/turno/turno-routing.module.ts");
      /* harmony import */


      var _turno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./turno.page */
      "./src/app/turno/turno.page.ts");

      var TurnoPageModule = function TurnoPageModule() {
        _classCallCheck(this, TurnoPageModule);
      };

      TurnoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _turno_routing_module__WEBPACK_IMPORTED_MODULE_5__["TurnoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_turno_page__WEBPACK_IMPORTED_MODULE_6__["TurnoPage"]]
      })], TurnoPageModule);
      /***/
    },

    /***/
    "./src/app/turno/turno.page.scss":
    /*!***************************************!*\
      !*** ./src/app/turno/turno.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppTurnoTurnoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1cm5vL3R1cm5vLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/turno/turno.page.ts":
    /*!*************************************!*\
      !*** ./src/app/turno/turno.page.ts ***!
      \*************************************/

    /*! exports provided: TurnoPage */

    /***/
    function srcAppTurnoTurnoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TurnoPage", function () {
        return TurnoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _model_Turno__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../model/Turno */
      "./src/app/model/Turno.ts");
      /* harmony import */


      var _services_turnos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/turnos.service */
      "./src/app/services/turnos.service.ts");

      var TurnoPage = /*#__PURE__*/function () {
        function TurnoPage(formBuilder, navCtrl, tService, loadingController, toastController, storage) {
          var _this = this;

          _classCallCheck(this, TurnoPage);

          this.formBuilder = formBuilder;
          this.navCtrl = navCtrl;
          this.tService = tService;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.storage = storage;
          this.turno = this.formBuilder.group({
            fecha: '',
            nombre: '',
            detalle: '',
            tipo: '',
            deviceId: ''
          });
          this.storage.get('user').then(function (val) {
            _this.turno.controls.nombre.setValue(val.nombre);

            _this.turno.controls.deviceId.setValue(val.id);
          });
          this.storage.get('fecha').then(function (val) {
            _this.turno.controls.fecha.setValue(val);
          });
          this.storage.get('tipo').then(function (val) {
            _this.turno.controls.tipo.setValue(val);
          });
        }

        _createClass(TurnoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "saveTurno",
          value: function saveTurno() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var turno, loading, toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      turno = new _model_Turno__WEBPACK_IMPORTED_MODULE_5__["Turno"]();
                      turno.tur_fecha = this.turno.controls.fecha.value;
                      turno.tur_hora = "";
                      turno.tur_nombre = this.turno.controls.nombre.value;
                      turno.tur_detalle = this.turno.controls.detalle.value;
                      turno.tur_tipo = this.turno.controls.tipo.value;
                      turno.tur_estado = "PENDIENTE";
                      turno.device_id = this.turno.controls.deviceId.value;
                      _context.next = 10;
                      return this.loadingController.create({
                        message: "Espere...",
                        spinner: "crescent"
                      });

                    case 10:
                      loading = _context.sent;
                      _context.next = 13;
                      return this.toastController.create({
                        color: 'primary',
                        message: 'Se registró el pedido! <br> En breve nos comunicaremos con usted.',
                        duration: 2000
                      });

                    case 13:
                      toast = _context.sent;
                      _context.next = 16;
                      return loading.present();

                    case 16:
                      _context.next = 18;
                      return this.tService.saveTurno(turno).subscribe(function (data) {
                        toast.present();
                        loading.dismiss();

                        _this2.navigateBack();
                      }, function (error) {
                        loading.dismiss();
                      });

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.navCtrl.back();
          }
        }]);

        return TurnoPage;
      }();

      TurnoPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _services_turnos_service__WEBPACK_IMPORTED_MODULE_6__["TurnosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      TurnoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-turno',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./turno.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/turno/turno.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./turno.page.scss */
        "./src/app/turno/turno.page.scss"))["default"]]
      })], TurnoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=turno-turno-module-es5.js.map