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
    login(data : any) : Observable<login[]> {
      console.log("dataaaaaaa",data)
        let headers = new Headers();
        let body = new URLSearchParams();
        body.set('userId','userId1');
        body.set('pass','pass1');
        this.createAuthorizationHeader(headers);
        return this.http.post('http://localhost:8000/api/v1/login' , body, {
            headers: headers
        })
            .map(res => res.json())

    }

}
