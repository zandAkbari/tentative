"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var api_services_1 = require("../app/services/api.services");
var AppComponent = (function () {
    function AppComponent(builder, api) {
        this.builder = builder;
        this.api = api;
        this.userId = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(2)
        ]);
        this.pass = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(2)
        ]);
        this.userIdReg = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(2)
        ]);
        this.passwordReg = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(2)
        ]);
        this.nameE = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(2)
        ]);
        this.loginForm = this.builder.group({
            userId: this.userId,
            pass: this.pass,
        });
        this.registerForm = this.builder.group({
            userIdReg: this.userIdReg,
            passwordReg: this.passwordReg,
        });
        this.profileForm = this.builder.group({
            nameE: this.nameE,
        });
        this.submitted = false;
        this.error = false;
        this.editing = false;
        this.errorE = false;
        this.name = "";
        this.register = false;
    }
    AppComponent.prototype.login = function (values) {
        var _this = this;
        console.log(values);
        console.log(this.loginForm.value);
        this.api.login(values)
            .subscribe(function (res) {
            console.log(res);
            if (res["success"]) {
                console.log("kkkkk", _this.userId);
                _this.token = res["data"]["token"];
                _this.api.user(_this.token)
                    .subscribe(function (res) {
                    if (res["success"]) {
                        console.log("ddddd", res["data"]["name"]);
                        _this.name = res["data"]["name"];
                        _this.error = false;
                        _this.submitted = true;
                    }
                    else {
                    }
                });
            }
            else {
                _this.error = true;
            }
        });
    };
    AppComponent.prototype.registerf = function (values) {
        var _this = this;
        this.api.register(values)
            .subscribe(function (res) {
            if (res["success"]) {
                _this.register = false;
            }
            else {
            }
        });
    };
    AppComponent.prototype.profile = function (values) {
        var _this = this;
        console.log(this.profileForm);
        console.log(this.profileForm.value["nameE"]);
        this.api.edite(this.profileForm.value["nameE"], this.token)
            .subscribe(function (res) {
            if (res["success"]) {
                _this.name = _this.nameE.value;
                console.log(res);
                _this.editing = false;
                _this.errorE = false;
            }
            else {
                _this.errorE = true;
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '/templates/app.component.html',
        providers: [api_services_1.ApiService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, api_services_1.ApiService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map