import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-viewresultform',
  templateUrl: './viewresultform.component.html',
  styleUrls: ['./viewresultform.component.css']
})
export class ViewresultformComponent implements OnInit {

  constructor(public infoservice:InfoService) { }

  ngOnInit(): void {
  }
  searchMarksheet(formData:NgForm){
    console.log(formData)
     
     this.infoservice.searchReportcard(formData.value);
     this.infoservice.getReportMembers(formData.value.enroll,formData.value.semester);
     this.infoservice.getFinalResult(formData.value.enroll,formData.value.semester);
   }


}
