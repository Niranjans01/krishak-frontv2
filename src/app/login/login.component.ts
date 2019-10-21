import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as $ from 'jquery';
import { database } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router
  ) {
      // redirect to home if already logged in
    //   if (this.authenticationService.currentUserValue) { 
    //       this.router.navigate(['/']);
    //   }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login(username:any,password:any) {

      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      else {
      $.ajax({
        url: 'http://localhost:90/login',
        type: 'POST',
        data: {
          username: this.f.username.value,
          password: this.f.password.value
        },
        success: function (data) {
          if (data.success == true) {
            alert('welcome');
            window.location.href = '/admin';
            localStorage.setItem('success_login', 'session_verified');
          }
          else{
            alert('Invalid credintials');
          }
        },
        error: function (err) {
         alert('Something went wrong');
        }
      })
    }
    this.loading = true;
  }
}

function newFunction() {
  let username;
}

