import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudticketComponent } from './crudticket/crudticket.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"app-crudticket",
    pathMatch:"full"
  },
  {
    path:"app-crudticket",
    component:CrudticketComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
