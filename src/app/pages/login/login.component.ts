import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TempHttpService } from '../../shared/services/temp-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tempHttp: TempHttpService,
    private location: Location
  ) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.tempHttp.login({});

    localStorage.setItem('userId', '1');
    localStorage.setItem('userName', '孔夫子的妾');
    localStorage.setItem('avatar', '');

    this.location.back();
  }



  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['123456', [Validators.required]],
      password: ['123456', [Validators.required]],
      remember: [true]
    });
  }
}
