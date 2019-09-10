import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { consults } from '../models/consults';
import { anime } from '../login/anime';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  animations: anime,
})
export class FormPage implements OnInit {
  title = '';
  myForm: FormGroup;
  o = new User();
  constructor(private route: ActivatedRoute, private fb: FormBuilder
    , private session: SessionService) { }

  ngOnInit() {
    const index = +this.route.snapshot.paramMap.get('id');
    this.title = consults[index].title;
    this.o = this.session.user;
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      question: ['', Validators.required],
      fullName: `${this.o.firstname} ${this.o.lastname}`,
      tel: this.o.tel,
      email: this.o.email,
    });
  }

  // get email() { return this.myForm.get('email'); }
  // get password() { return this.myForm.get('password'); }

  // get emailError() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //     this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  // get passwordError() {
  //   return this.password.hasError('required') ? 'You must enter a value' : '';
  // }

  submit(o: User) {
    console.log(o);
    // this.uow.users.add(o).subscribe(r => {
    //   console.log(o);
    // })
  }

  resetForm() {
    this.o = new User();
    this.createForm();
  }

}
