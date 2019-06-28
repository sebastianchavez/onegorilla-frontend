import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(`${this.api}${url}`);
  }

  post(url: string, body) {
    return this.http.post(`${this.api}${url}`, body);
  }

}
