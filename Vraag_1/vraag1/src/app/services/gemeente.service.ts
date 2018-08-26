import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import {Toilet} from '../models/toilet';

const ApiBase = '/assets/gemeente.json';

@Injectable()
export class GemeenteService {

  constructor(private http: Http) {
  }

  getGemeente() {
    return this.http.get(ApiBase)
      .map(res => res.json())
      .map(res => <string[]>res)
      .catch(this.catchError);
  }

  catchError(err: any) {
    console.error(err);
    return Observable.throw(err.statusText);
  }
}
