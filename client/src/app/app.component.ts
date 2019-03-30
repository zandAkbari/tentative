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
    token:string;
    name:string;
    register:boolean;

  userId = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

    pass = new FormControl('' , [
    Validators.required,
        Validators.minLength(2)
  ]);
    userIdReg = new FormControl('', [
        Validators.required,
        Validators.minLength(2)
    ]);

    passwordReg = new FormControl('' , [
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
    registerForm: FormGroup = this.builder.group({
        userIdReg : this.userIdReg,
        passwordReg : this.passwordReg,

    });
    profileForm: FormGroup = this.builder.group({
        nameE : this.nameE,


    });

  constructor(private builder: FormBuilder,private api : ApiService) {
    this.submitted = false;
      this.error = false;
      this.editing = false;
      this.errorE = false;
      this.name=""
      this.register=false;
  }

  login(values : any) {
    console.log(values);
    console.log(this.loginForm.value);
      this.api.login(values)
          .subscribe(res => {
              console.log(res);
             if(res["success"]){
                 console.log("kkkkk",this.userId)
                 this.token=res["data"]["token"]
                 this.api.user(this.token)
                     .subscribe(res => {
                         if(res["success"]){
console.log("ddddd",res["data"]["name"])
                             this.name=res["data"]["name"];
                             this.error=false
                             this.submitted = true;

                         }else {

                         }

                     })

             }else{
                 this.error = true;
             }

          })

  }
    registerf(values : any) {

        this.api.register(values)
            .subscribe(res => {

                if(res["success"]){
                    this.register = false


                }else{

                }

            })

    }
    profile(values : any) {
        console.log(this.profileForm);
        console.log(this.profileForm.value["nameE"]);
        this.api.edite(this.profileForm.value["nameE"],this.token)
            .subscribe(res => {
                if(res["success"]){

                    this.name=this.nameE.value;
                    console.log(res);
                    this.editing = false;
                    this.errorE = false;
                }else {
                    this.errorE = true;
                }

            })

    }
}
