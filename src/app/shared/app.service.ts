import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantService {

     baseUrl = 'http://localhost:45917/api/v1/';
     constructor(private httpClient: Http) { }

     getRestaurantList() {
          return this.httpClient.get(this.baseUrl + 'restaurants').map((res: Response) => res);

     }

     saveRestaurant(data) {
          let bodyObj = JSON.stringify(data);
          let header = new Headers();
          header.append('Content-Type', 'application/json');
          let options = new RequestOptions({ headers: header });
          return this.httpClient.post(this.baseUrl + 'restaurants', bodyObj, options).map((res: Response) => res.json())
     }

}