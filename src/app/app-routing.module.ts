import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CoursesComponent } from './courses/courses.component';
import { MarksComponent } from './marks/marks.component';
import { FormComponent } from './form/form.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { ViewresultformComponent } from './viewresultform/viewresultform.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'marks',component:MarksComponent},
  {path:'form',component:FormComponent},
  {path:'courses',component:CoursesComponent},
  {path:'marksheet',component:MarksheetComponent},
  {path:'viewresultform',component:ViewresultformComponent},
  {path:'marks/:enroll/:year/:semester/:name',component:MarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
