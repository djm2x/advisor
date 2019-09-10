import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../models/user';
import { anime } from '../login/anime';
import { UowService } from '../services/uow.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  animations: anime,
})
export class SignupPage implements OnInit {
  myForm: FormGroup;
  o = new User();
  constructor(private fb: FormBuilder, private uow: UowService
    , private router: Router, private snackbar: SnackbarService) { }

  ngOnInit() {
    // test
    this.o.email = 'dj@angular.io';
    this.o.password = '12345678';
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      firstname: [this.o.firstname, [Validators.required]],
      lastname: [this.o.lastname, [Validators.required]],
      tel: [this.o.tel, [Validators.required]],
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, [Validators.required]],
      rememberMe: [this.o.rememberMe],
    });
  }

  get email() { return this.myForm.get('email'); }
  get password() { return this.myForm.get('password'); }

  get emailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get passwordError() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  submit(o: User) {
    this.snackbar.openMySnackBar('creating account...');
    this.uow.users.add(o).subscribe(r => {
      setTimeout(() => {
        this.router.navigate(['/login']);
        this.snackbar.dismiss();
      }, 1500);
    }, e => this.snackbar.openSnackBar(e))
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

}

