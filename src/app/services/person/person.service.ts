
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { Address, AddressPresentation } from './../../models/address/address';
import { Person, PersonPresentation, PersonDetails } from 'app/models/person';
import { PagedQuery } from 'app/models';

@Injectable()
export class PersonService {
  private _endPoint: string;
  constructor(
    private _http: HttpClient
  ) {
    this._endPoint = environment.personServiceEndpoint;
  }

  private get JsonContentHeader(): HttpHeaders {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return headers;
  }

  private generatePagedParams(params: PagedQuery): HttpParams {
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
    return queryValues;
  }

  createPerson(data: Person): Observable<PersonPresentation> {
    return this._http.post<PersonPresentation>(this._endPoint, JSON.stringify(data), {
      headers: this.JsonContentHeader
    });
  }

  queryPersons(params: PagedQuery): Observable<PersonPresentation[]> {
    return this._http.get<PersonPresentation[]>(this._endPoint, {
      params: this.generatePagedParams(params)
    });
  }

  getPerson(id: number): Observable<PersonDetails> {
    return this._http.get<PersonDetails>(`${this._endPoint}/${id}`);
  }

  updatePerson(id: number, data: Person): Observable<PersonPresentation> {
    return this._http.put<PersonPresentation>(`${this._endPoint}/${id}`, JSON.stringify(data), {
      headers: this.JsonContentHeader
    });
  }

  deletePerson(id: number): Observable<any> {
    return this._http.delete(`${this._endPoint}/${id}`);
  }

  createAddress(personId: number, data: Address): Observable<AddressPresentation> {
    return this._http.post<AddressPresentation>(`${this._endPoint}/${personId}/addresses`,
      JSON.stringify(data), {
        headers: this.JsonContentHeader
      });
  }

  queryAddressesFromPerson(personId: number, params: PagedQuery): Observable<AddressPresentation[]> {
    return this._http.get<AddressPresentation[]>(`${this._endPoint}/${personId}/addresses`, {
      params: this.generatePagedParams(params)
    });
  }
}
