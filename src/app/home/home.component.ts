import { Component, OnInit,Input } from '@angular/core';
import { AddmembersService } from '../addmembers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'resultps';
  isclicked=false
  constructor(public addMember:AddmembersService) { }

  ngOnInit(): void {
  }
  searchStudent(formData:NgForm){
    console.log(formData)
     /* this.addMember.branch=formData.value.branch;
     this.addMember.year=formData.value.year;
     this.addMember.semester=formData.value.semester;*/
     this.isclicked=true;
     this.addMember.getAppMembers(formData.value.branch,formData.value.year,formData.value.semester);
   }

}
