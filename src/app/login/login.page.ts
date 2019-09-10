import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { User } from '../models/user';
import { anime } from './anime';
import { UowService } from '../services/uow.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: anime
})
export class LoginPage implements OnInit, OnDestroy {
  myForm: FormGroup;
  o = new User();
  checkbox = new FormControl(true);
  constructor(private fb: FormBuilder, private uow: UowService
    , private router: Router, public session: SessionService
    , private snackbar: SnackbarService) { }

  async ngOnInit() {
    // test
    this.o.email = 'dj@angular.io';
    this.o.password = '12345678';
    this.createForm();

    // this.checkbox.valueChanges.subscribe(r => console.log(r));
    // * remeber me
    const s = JSON.parse(localStorage.getItem('user'));
    // if (s) {
    //   const u = await this.uow.users.findOne({ where: {email: s.email}}).toPromise();
    //   if (u.password === s.password) {
    //     this.router.navigate(['/concern']);
    //   }
    // }
    if (this.session.isSignedIn) {
      this.snackbar.openMySnackBar('login...');
      setTimeout(() => {
        this.snackbar.dismiss();
        this.router.navigate(['concern']);
      }, 1500);
    }
  }

  createForm() {
    this.myForm = this.fb.group({
      email: [this.o.email, [Validators.required, Validators.email]],
      password: [this.o.password, [Validators.required]],
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

  submit(o: { email: string, password: string }) {
    this.snackbar.openMySnackBar('login...');
    this.uow.users.findOne({where : o}).subscribe(r => {
      console.log(r);
      if (r) {
        this.checkbox.value ? r.rememberMe = 1 : r.rememberMe = 0;
        this.session.doSignIn(r);
        this.router.navigate(['/concern']);
        this.snackbar.dismiss();
      } else {
        this.snackbar.dismiss();
      }
    });
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
