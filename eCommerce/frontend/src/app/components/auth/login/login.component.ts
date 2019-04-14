import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private fb: FormBuilder) { }

  loginForm;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  createUser(email, password) {
    this.auth.create(email, password).subscribe(user => {
      console.log(user);
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted');
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data._id);
      });
    }
  }

  test() {
    this.createUser('vidit@gmail.com', '1234');
  }

}
