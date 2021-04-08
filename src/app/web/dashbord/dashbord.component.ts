import { Component, Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})


export class DashbordComponent  {

   items  : Observable <any>
   
  
   //public _usersList: User[];
   public node1List: Node1[];

  //  public _id:number;
  //  public _name:string;
  //  public _phone:string;

   public A : string;
   public S: string;
   public V : string;

  constructor(private  db: AngularFireDatabase){
    //this.items = this.db.list('node1').valueChanges();

    //this.getStarted()

    this.getDataFromRealtime()

  }

  async getStarted(){
    var node1: Node1[];
    await this.getUserFreomRealtimDB().then(value => {
      node1 = value as Node1[];
    })
  this.node1List = node1;
   console.log(this.node1List)
   //this._id = this._usersList[this._usersList.length -1].id+1

  }

  getUserFreomRealtimDB(){
    return new Promise((resove,reject)=>{
      this.db.list('node1').valueChanges().subscribe(value => {
        resove(value);
      });
    });
  }

  getDataFromRealtime(){
    this.db.list('node1').snapshotChanges().forEach(datasSnapshot=>{
      this.node1List = [];
      datasSnapshot.forEach(dataSnapshot=>{
        let data = dataSnapshot.payload.toJSON();

        this.node1List.push(data as Node1)
      })
    })
  }


//   items = [
//     { text: 'A', color: 'red' },
//     { text: 'B', color: 'green' },
//     { text: 'C', color: 'blue' },
//     { text: 'D', color: '#54e5d7' } // Hex colors also work
//  ];


  
}

// class User{
//   id : number;
//   name: string;
//   phone : string;
// }

class Node1{
  A : string;
  S: string;
  V : string;
}


