import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiDjangoService } from '../services/api-django.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

loginForm: FormGroup;


  constructor(public formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9_.+-]+$')
        ]))
    });

  }




  ngOnInit(){
  }

login() {
  console.log('email: ', this.loginForm.value.email);
  console.log('password: ', this.loginForm.value.password);
  Response = this.http.get(myUrl).subscribe((response) => {
    console.log(response);
  });
}

}