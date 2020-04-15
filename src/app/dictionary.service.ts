import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private url = 'https://sba-spell-checker-api.herokuapp.com/'

  constructor(private http: HttpClient) { }

  checkContent (request) {
    return this.http.put(this.url, request);
  }

  addSelection (request) {
    //disabled due to free database
    // return this.http.post(this.url, request)
  }

}
