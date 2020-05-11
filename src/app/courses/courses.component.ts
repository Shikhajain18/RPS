import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(public infoservice:InfoService) { }

  ngOnInit(): void {
  }
  addCourses(formData:NgForm){
    console.log(formData);
    this.infoservice.addCourses(formData.value);
    formData.resetForm();
  }

}
