import { Component, OnInit,Input } from '@angular/core';
import { InfoService } from '../info.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  

  constructor(public infoservice:InfoService) { }

  ngOnInit(): void {
  }
  addMarks(formData:NgForm){
    console.log(formData);
    this.infoservice.addMarks(formData.value);
    this.infoservice.getBacklog(formData.value);
    

  }


}
