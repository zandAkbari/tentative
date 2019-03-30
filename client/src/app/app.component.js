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
        this.nameE = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(2)
        ]);
        this.loginForm = this.builder.group({
            userId: this.userId,
            pass: this.pass,
        });
        this.profileForm = this.builder.group({
            nameE: this.nameE,
        });
        this.submitted = false;
        this.error = false;
        this.editing = false;
        this.errorE = false;
    }
    AppComponent.prototype.login = function (values) {
        var _this = this;
        console.log(values);
        console.log(this.loginForm.value);
        this.api.login(values)
            .subscribe(function (res) {
            console.log(res);
            if (res["success"]) {
                _this.error = false;
                _this.submitted = true;
            }
            else {
                _this.error = true;
            }
        });
    };
    AppComponent.prototype.profile = function () {
        console.log(this.profileForm);
        console.log(this.profileForm.value);
        /* this.api.login("2","9")
             .subscribe(res => {
                 console.log(res);
             })*/
        this.editing = false;
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