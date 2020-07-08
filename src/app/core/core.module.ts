import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpCommunicationsService } from './http-communications/http-communications.service';
import { TodosServerService } from './services/todos-server.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [],
  providers: [HttpCommunicationsService, TodosServerService, AuthService],
  imports: [
    HttpClientModule
  ]
})
export class CoreModule { }
