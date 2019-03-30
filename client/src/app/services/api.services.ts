import { Injectable } from  '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { login } from './../models/login';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http : Http) { }
    login(data : any) : Observable<login[]> {
        return this.http.post('http://localhost:8000/api/v1/login' , data)
            .map(res => res.json())

    }

}
