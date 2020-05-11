import { Component, OnInit, Input} from '@angular/core';
import { InfoService } from '../info.service';
import { AddmembersService } from '../addmembers.service';


@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  @Input('member') result1
  isclicked=false
  constructor(public addMember:AddmembersService,public infoservice:InfoService) {

    }
    

  ngOnInit(): void {
  }
  onAdd(){
    this.infoservice.getAppMembers(this.result1.branch,this.result1.year,this.result1.semester,this.result1.enroll);
  
  }
  
}
