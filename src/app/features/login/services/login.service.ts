import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCommunicationsService } from 'src/app/core/http-communications/http-communications.service';
import { User } from 'src/app/core/model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList: User[];

  constructor(private router:Router, private myHttpService: HttpCommunicationsService) { 
    this.getUsers();
  }

  accesso(form): boolean{
    let controllo=false;
    this.usersList.forEach(element => {
      if(element.username==form.username && element.password==form.password){
        
          sessionStorage.setItem('user', JSON.stringify(element.id));
          
        controllo=true;
      }
    });
    return controllo;
  }

  executeLogin(form){
    if (this.accesso(form)) {
      this.router.navigateByUrl('/home');
    }
    else{
      window.alert("utente non trovato")
      this.router.navigateByUrl('/login');
    }
  }

  getUsers(){
    this.myHttpService.getUsers().subscribe(reponse => {
      this.usersList = reponse;
    }, err => {
      console.log('error');
    });
  }
}
