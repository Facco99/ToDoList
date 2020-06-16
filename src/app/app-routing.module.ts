import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'customers', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, { path: 'customers', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }, { path: 'customers', loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
