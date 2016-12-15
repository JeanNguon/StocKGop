import {
  Inject,
  Injectable
} from '@angular/core';


import {
  Http,
  Headers
} from '@angular/http';

import 'rxjs/add/operator/map';
import {AbstractService} from "./abstractService";

@Injectable()
export class MenuService extends AbstractService{
  static route: string = '/api/menu/:id';

  constructor(@Inject(Http) protected _http: Http) {
    super(_http, MenuService.route);
  }


}
