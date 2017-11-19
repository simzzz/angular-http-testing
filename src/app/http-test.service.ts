import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpTestService {

  constructor(private _http: Http) { }

  getCurrentTime() {
    return this._http.get('http://date.jsontest.com/')
    .map(res => res.json());
  }

  postJSON() {
    const json = JSON.stringify({var1: 'test'});
    const params = 'json=' + json;
    const head = new Headers();
    head.append('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post('http://validate.jsontest.com', params)
    .map(res => res.json());
  }
}
