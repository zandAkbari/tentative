import { Component } from '@angular/core';
import { Validators , FormGroup , FormControl , FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl : '/templates/app.component.html',
})
export class AppComponent  {
  submitted: boolean;

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

    password = new FormControl('' , [
    Validators.required
  ]);

  commentForm: FormGroup = this.builder.group({
    name : this.name,
      password : this.password
  });

  constructor(private builder: FormBuilder) {
    this.submitted = false;
  }

  sendComment() {
    console.log(this.commentForm);
    console.log(this.commentForm.value);
    this.submitted = true;
  }
}
