import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface JWT {
  email: string;
  _id: string;
  token: string;
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

  login(email, password): Observable<JWT> {
    return this.http.post(`${this.uri}/users/login`, {
      email,
      password
    }).pipe(
      map(res => res as JWT )
    );
  }

  isLoggedIn() {
    return (localStorage.getItem('token') !== null);
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
