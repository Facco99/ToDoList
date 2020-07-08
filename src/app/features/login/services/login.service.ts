import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCommunicationsService } from 'src/app/core/http-communications/http-communications.service';
import { User } from 'src/app/core/model/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList: User[];

  constructor(private router:Router, private myHttpService: HttpCommunicationsService,private authService : AuthService) { 
  }

  executeLogin(username:string){
    this.authService.doLogin(username).subscribe((users: User[]) => {
      if (users && users.length > 0) {
        sessionStorage.setItem("user", username);
        this.router.navigateByUrl("/home");
      }else{
        alert("Login errata");
      }
    }, ()=>{
      alert("Login in errore");
    });
  }
}
