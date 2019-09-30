import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerUser(name: any,email: any,location: any,username: any,password: any){
  let base_url='http://localhost:90/'
  let nameValue = name.value;
    let emailValue = email.value;
    let locationValue = location.value;
    let usernameValue=username.value;
    let passwordValue=password.value;

    let data= {
      name:nameValue,
      email:emailValue,
      location:locationValue,
      userName:usernameValue,
      password:passwordValue
    }

    console.log(data)
    // alert('I am here')

    if (nameValue == '') {
      alert('Please enter a name *');
    }
    else if (emailValue=='') {
     alert('Please enter a valid email');
    }
    else if (usernameValue=='') {
     alert('Please enter a valid username');
    }
    else if (passwordValue=='') {
     alert('Please enter a valid password');
    }
    else{
      $.ajax({
        type: 'POST',
        url: base_url + 'register',
        data,
        success: function () {
          alert('Success')
        },
        error: function () {
          alert('error')
        }
      });
    }
}

  constructor() { }

  ngOnInit() {
  }

}
