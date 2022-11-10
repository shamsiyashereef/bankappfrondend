import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {// 3rd excecute
// properties
aim="your perfect banking partner"
accounts="Enter your acc:no here"
acno="";
pswd="";
 
//userdefined functions //4 th execute
acnochange(event:any){
  this.acno=event.target.value
console.log(this.acno);
}

pswdchange(event:any){
  this.pswd=event.target.value
console.log(this.pswd);
}

login(){
  //alert('login clicked')
  var acno=this.acno;
  var pswd=this.pswd;

  const result=this.ds.login(acno,pswd);
  if(result){
    alert("login successful");
    this.router.navigateByUrl('dashboard');
  }
}
// login(a:any,p:any){
//   //alert('login clicked')
//   var acno=a.value;
//   var pswd=p.value;
//   var userdetails=this.userdetails;

//   if(acno in userdetails){
//     if(pswd==userdetails[acno]['password']){
//       alert('login sucessfull')
//     }else{
//       alert("invalid password")
//     }
//   }else{
//     alert("invalid user details")
//   }
// }


userdetails:any={
  1000:{acno:1000,username:'sharfi',password:1000,balance:1000}, 
  1001:{acno:1000,username:'sunu',password:1001,balance:1000},
  1002:{acno:1000,username:'shani',password:1002,balance:1000}
}
//router-variable of login
//Router its a class of navigateByUrl
  constructor(private router:Router,private ds:DataService) { }// 1st execute //spl member function,automatically invoke when function created

  ngOnInit(): void {// 2nd excetute life cycle hooks of angular. initial process of component initialisation
  }

}
