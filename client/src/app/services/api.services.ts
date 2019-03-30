import { Injectable } from  '@angular/core';
import { Http ,  Headers ,URLSearchParams} from "@angular/http";
import { Observable } from "rxjs";
import { login } from './../models/login';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http : Http) { }
    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    login(data : any) : Observable<boolean> {
      console.log("dataaaaaaa",data)
        let headers = new Headers();
        let body = new URLSearchParams();
        body.set('userId',data["userId"]);
        body.set('password',data["pass"]);
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8000/api/v1/login' , body, {
            headers: headers
        })
            .map(res => res.json())

    }
    register(data : any) : Observable<boolean> {
        console.log("dataaaaaaa",data)
        let headers = new Headers();
        let body = new URLSearchParams();
        body.set('userId',data["userIdReg"]);
        body.set('password',data["passwordReg"]);
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8000/api/v1/register' , body, {
            headers: headers
        })
            .map(res => res.json())

    }
    edite(name : any,token:any) : Observable<boolean> {

        let headers = new Headers();
        let body = new URLSearchParams();
        body.set('name',name);
        body.set('token',token);
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8000/api/v1/edit' , body, {
            headers: headers
        })
            .map(res => res.json())

    }
    user(token:any) : Observable<boolean> {

        let headers = new Headers();
        let body = new URLSearchParams();

        body.set('token',token);
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8000/api/v1/user' , body, {
            headers: headers
        })
            .map(res => res.json())

    }
}
