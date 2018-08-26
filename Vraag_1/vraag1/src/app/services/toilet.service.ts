import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Toilet} from '../models/toilet';

const ApiBase = '/assets/toiletten.json';

@Injectable()
export class ToiletService {

  constructor(private http: Http) {
  }

  getToilets() {
    return this.http.get(ApiBase)
      .map(res => res.json())
      .map(res => <Toilet[]>res)
      .catch(this.catchError);
  }

  catchError(err: any) {
    console.error(err);
    return Observable.throw(err.statusText);
  }

}
