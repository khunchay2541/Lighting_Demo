import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public _usersList: User[];

  public _id:number;
  public _name:string;
  public _phone:string;

  constructor(private db: AngularFireDatabase){
   // this.db.object('users/0').set({id : 1 ,name : ' max purl' , phone : ' 0897654321'})
    //this.getStarted()
  }

  async getStarted(){
    var users: User[];
    await this.getUserFreomRealtimDB().then(value => {
      users = value as User[];
    })

    this._usersList = users;
   console.log(this._usersList)

   this._id = this._usersList[this._usersList.length -1].id+1

  }

  getUserFreomRealtimDB(){
    return new Promise((resove,reject)=>{
      this.db.list('users').valueChanges().subscribe(value => {
        resove(value);
      });
    });
  }

  async addUser(){
    var data ={
      id: this._id,
      name:this._name,
      phone: this._phone
    }

    await this.db.object('users/'+(String(this._id -1))).set(data)
    await this.getStarted();

    this.clearFields()
  }

  clearFields(){
    this._name='',
    this._phone=''
  }
}



class User{
    id : number;
    name: string;
    phone : string;
}