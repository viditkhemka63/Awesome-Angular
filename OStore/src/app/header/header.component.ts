import { Component, OnInit, OnChanges } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit {

  constructor(
    public auth: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth) { }

    ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
