import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  email: string;
  salt: string;
  hash: string;
}
interface Cat {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  create(email, password): Observable<any> {
    return this.http.post(`${this.uri}/users/create`, {
      email,
      password
    });
  }
}
