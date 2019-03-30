import { Component } from '@angular/core';
import { Validators , FormGroup , FormControl , FormBuilder } from '@angular/forms';
import { ApiService } from "../app/services/api.services";
@Component({
  selector: 'my-app',
  templateUrl : '/templates/app.component.html',
    providers : [ ApiService ]
})
export class AppComponent  {

  submitted: boolean;
    error: boolean;
    editing:boolean;
    errorE:boolean;

  userId = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

    pass = new FormControl('' , [
    Validators.required,
        Validators.minLength(2)
  ]);
    nameE = new FormControl('', [
        Validators.required,
        Validators.minLength(2)
    ]);
    loginForm: FormGroup = this.builder.group({
    userId : this.userId,
      pass : this.pass,

  });
    profileForm: FormGroup = this.builder.group({
        nameE : this.nameE,


    });

  constructor(private builder: FormBuilder,private api : ApiService) {
    this.submitted = false;
      this.error = false;
      this.editing = false;
      this.errorE = false;

  }

  login(values : any) {
    console.log(values);
    console.log(this.loginForm.value);
      this.api.login(values)
          .subscribe(res => {
              console.log(res);
          })
    this.submitted = true;
  }
    profile() {
        console.log(this.profileForm);
        console.log(this.profileForm.value);
       /* this.api.login("2","9")
            .subscribe(res => {
                console.log(res);
            })*/
        this.editing = false;
    }
}
