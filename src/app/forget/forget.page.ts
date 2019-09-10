import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { User } from '../models/user';
import { UowService } from '../services/uow.service';
import { anime } from '../login/anime';
import { HttpClient } from '@angular/common/http';

const API0 = `http://localhost:5000/api/test`;
const API = `http://192.168.1.21:80/api/test`;
const API1 = `http://cardebate-002-site2.atempurl.com/api/test`;

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
  animations: anime,
})
export class ForgetPage implements OnInit {
  email = new FormControl('dj-m2x@hotmail.com', [Validators.required, Validators.email]);
  password = new FormControl({ value: '', disabled: true }, [Validators.required, Validators.min(6)]);
  code = new FormControl(0, Validators.required);
  // codeR = 0;
  dateDiff = 0;
  constructor(private uow: UowService, private http: HttpClient) { }

  ngOnInit() {

  }

  get emailError() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  get passwordError() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }

  get codeError() {
    return this.code.hasError('required') ? 'You must enter a value' :
      this.code.hasError('wrong') ? 'wrong code' : '';
  }

  submitEmail(email: string) {
    console.log(email);
    const code = this.random();
    localStorage.setItem('countDown', JSON.stringify({ date: new Date(), code: code }));
    const subject = `reinitialisation password`;
    const message = `<h1>Code of Reactivation</h1><br><h3>${code} availble for 20 min from now.</h3>`;
    // send to
    const o = { email, subject, message };
    // this.http.post(`${API}/post`, o).subscribe(
    //   r => {
    //     console.log('email sended successfuly');
    //   }, e => console.warn(e)
    // );
    // ! test only
    this.code.setValue(code);
  }

  submitCode(code: number) {
    console.log(JSON.parse(localStorage.getItem('countDown')));
    const o: { date: Date, code: number } = JSON.parse(localStorage.getItem('countDown'));

    if (!o) {
      this.code.setErrors({ wrong: true });
      return;
    }

    this.dateDiff = Math.floor((new Date().getTime() - new Date(o.date).getTime()) / 1000 / 60);

    console.log(this.dateDiff, code, o.code);
    if (this.dateDiff < 20 && code === o.code) {
      this.password.enable();
    } else {
      this.code.setErrors({ wrong: true });
    }
  }

  async submitPassword(password) {
    const user = await this.uow.users.findOne({where : {email: this.email.value}}).toPromise();
    user.password = password;
    await this.uow.users.update(user.id, user).toPromise();
  }

  // This JavaScript function always returns a random number between min and max (both included):
  random(min = 1000, max = 9999) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

