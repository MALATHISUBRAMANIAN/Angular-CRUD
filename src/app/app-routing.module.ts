import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import {EditComponent} from './edit/edit.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [
  {path:'create', component: CreateComponent},
  {path:'edit', component: EditComponent},
  {path:'', component: BookComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
