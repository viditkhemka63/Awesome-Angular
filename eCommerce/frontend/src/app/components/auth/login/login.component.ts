import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  createUser(email, password) {
    this.auth.create(email, password).subscribe(user => {
      console.log(user);
    });
  }

  test() {
    this.createUser('vidit@gmail.com', '1234');
  }

}
