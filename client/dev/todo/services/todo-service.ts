import {
  Inject,
  Injectable
} from '@angular/core';


import {
  Http
} from '@angular/http';

import 'rxjs/add/operator/map';
import {AbstractService} from "./abstractService";

@Injectable()
export class TodoService extends AbstractService{
  static route: string = '/api/todos/:id';

  constructor(@Inject(Http) protected _http: Http) {
    super(_http, TodoService.route);
  }

}
