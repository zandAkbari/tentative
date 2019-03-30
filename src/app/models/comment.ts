export class Comment {
  name: string;
    password: string;

   constructor(name = '' , password= '' ) {
    this.name = name;
    this.password = password;
  }

  send() {
     console.log(this.name , this.password);
  }
}
