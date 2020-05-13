import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  constructor(public infoservice:InfoService) { }

  ngOnInit(): void {
    //console.log(this.infoservice.finalresult[0].ogpa)
  }

}
