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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    };
    ApiService.prototype.login = function (data) {
        console.log("dataaaaaaa", data);
        var headers = new http_1.Headers();
        var body = new http_1.URLSearchParams();
        body.set('userId', data["userId"]);
        body.set('password', data["pass"]);
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8000/api/v1/login', body, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.edite = function (name, token) {
        var headers = new http_1.Headers();
        var body = new http_1.URLSearchParams();
        body.set('name', name);
        body.set('token', token);
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8000/api/v1/edit', body, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.user = function (token) {
        var headers = new http_1.Headers();
        var body = new http_1.URLSearchParams();
        body.set('token', token);
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8000/api/v1/user', body, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.services.js.map