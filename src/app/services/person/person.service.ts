import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { Person, PersonPresentation } from 'app/models/person';
import { PagedQuery } from 'app/models';

@Injectable()
export class PersonService {
  private _endPoint: string;
  constructor(
    private _http: HttpClient
  ) {
    this._endPoint = environment.personServiceEndpoint;
  }

  createPerson(data: Person): Observable<PersonPresentation> {
    return this._http.post<PersonPresentation>(this._endPoint, JSON.stringify(data));
  }

  queryPersons(params: PagedQuery): Observable<PersonPresentation[]> {
    let queryValues = new HttpParams();
    // endpoint?filter=value&page=value&pageSize=value
    if (params.filter) {
      queryValues = queryValues.set('filter', params.filter);
    }
    if (params.page) {
      queryValues = queryValues.set('page', params.page.toString());
    }
    if (params.pageSize) {
      queryValues = queryValues.set('pageSize', params.pageSize.toString());
    }
    return this._http.get<PersonPresentation[]>(this._endPoint, {
      params: queryValues
    });
  }

  getPerson(id: number): Observable<PersonPresentation> {
    return this._http.get<PersonPresentation>(`${this._endPoint}/${id}`);
  }

  updatePerson(id: number, data: Person): Observable<PersonPresentation> {
    return this._http.put<PersonPresentation>(`${this._endPoint}/${id}`, JSON.stringify(data));
  }

  deletePerson(id: number): Observable<any> {
    return this._http.delete(`${this._endPoint}/${id}`);
  }
}
