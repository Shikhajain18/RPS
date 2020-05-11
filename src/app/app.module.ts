import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import 'firebase/firestore';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CoursesComponent } from './courses/courses.component';
import { FormComponent } from './form/form.component';
import { MarksComponent } from './marks/marks.component';
import { CoursepanelComponent } from './coursepanel/coursepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentdetailsComponent,
    CoursesComponent,
    FormComponent,
    MarksComponent,
    CoursepanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
