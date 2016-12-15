/**
 * Created by imiedev on 15/12/16.
 */
import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AbstractService {
  protected route: string = '/api/todos/:id';

  constructor(@Inject(Http) protected _http: Http, route: string) {
      this.route = route;
  }

  getAll():Observable<any> {
    return this._http
      .get(this.route.replace(':id', ''))
      .map((r) => r.json());
  }

  getElementById(id: string):Observable<any> {
    return this._http
      .get(this.route.replace(':id' ,id));
  }

  add(message:string):Observable<any> {
    let _messageStringified = JSON.stringify({todoMessage: message});

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
      .post(this.route.replace(':id', ''), _messageStringified, {headers})
      .map((r) => r.json());
  }

  remove(id: string):Observable<any> {
    return this._http
      .delete(this.route.replace(':id', id));
  }
}
