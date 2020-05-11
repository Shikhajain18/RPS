import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AddmembersService } from '../addmembers.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public addMember:AddmembersService) { }

  ngOnInit(): void {
  }
  addStudent(formData:NgForm){
    console.log(formData);
    this.addMember.addStudents(formData.value);
    formData.resetForm();
  }

}
