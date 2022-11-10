import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //login name display
  currentUser:any
//login acno
currentAcno:any;

  userdetails: any = {
    1000: { acno: 1000, username: 'sharfi', password: 1000, balance: 1000,transaction:[]},
    1001: { acno: 1000, username: 'sunu', password: 1001, balance: 1000,transaction:[]},
    1002: { acno: 1000, username: 'shani', password: 1002, balance: 1000,transaction:[]}
  }

  constructor() { }
  register(acno: any, username: any, password: any) {
    var userdetails = this.userdetails;
    if (acno in localStorage) {
      return false
    } else {
      userdetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction:[]
      }
      console.log(userdetails);
      return true;
    }
  }
  login(acno: any, pswd: any) {
    var userdetails = this.userdetails;
    if (acno in userdetails) {
      if (pswd = userdetails[acno]['password']) {
        this.currentUser=userdetails[acno]['username']
        this.currentAcno=acno
        return true;
      } else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  deposit(acno: any, pswd: any, amt: any) {
    let userdetails = this.userdetails;
    var amount=parseInt(amt);
    if(acno in userdetails){
    if (pswd == userdetails[acno]['password']) {
      userdetails[acno]['balance'] += amount;
      userdetails[acno]['transaction'].push({
        type:'credit',
        amount
      })
      console.log(userdetails);
      
      return userdetails[acno]['balance']
    } else {
      alert('invalid password')
      return false;
    }
  }
  else{
    alert('invalid user details');
    return false;
  }


}

withdraw(acno: any, pswd: any, amt: any){
  let userdetails = this.userdetails;
  var amount=parseInt(amt);
  if(acno in userdetails){
  if (pswd == userdetails[acno]['password']) {
    if(userdetails[acno]['balance']>amount){
    userdetails[acno]['balance'] -= amount;
    userdetails[acno]['transaction'].push({
      type:'debit',
      amount
    })
    console.log(userdetails);
    return userdetails[acno]['balance']
  } }else {
    alert('invalid password')
    return false;
  }
}
else{
  alert('invalid user details');
  return false;
}

}
getTransaction(acno:any){
  return this.userdetails[acno]['transaction'];
}
}
