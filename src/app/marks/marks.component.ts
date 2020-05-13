import { Component, OnInit,Input } from '@angular/core';
import { InfoService } from '../info.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
  value  
val
sum=0
credittotal=0
totalresult;
public showresult=false;
year
enroll
sem
isalready=false;
ogpa
name
details1:any={enroll:0, Sem1:0, Sem2:0,Sem3:0,Sem4:0,Sem5:0,Sem6:0,Sem7:0,Sem8:0,ogpa:0};
editresult:any={enroll:"", Sem1:"", Sem2:"",Sem3:"",Sem4:"",Sem5:"",Sem6:"",Sem7:"",Sem8:"",ogpa:""};
  

  constructor(public infoservice:InfoService,public db:AngularFirestore,public router1:Router,public router:ActivatedRoute) { }

  ngOnInit() {

    this.infoservice.backlog0="";
    this.infoservice.backlog1="";
    this.infoservice.backlog2="";
    this.infoservice.backlog3="";
    this.infoservice.backlog4="";
    this.infoservice.backlog5="";
    this.router.params.subscribe(res=>{
      this.enroll=res['enroll']
      this.year=res['year']
      this.sem=res['semester']
      this.name=res['name']
      console.log(this.enroll)
        })
        this.infoservice.getresult();
  }
  addMarks(formData:NgForm){
    console.log(formData);
    
    this.infoservice.getBacklog(formData.value);
    this.infoservice.addMarks(formData.value);
    

  }

  show(){
    //console.log(this.infoservice.marks[2].TH)
    for(var i=0; i<this.infoservice.marks.length;i++) {
      if(this.infoservice.marks[i].enroll==this.enroll && this.infoservice.marks[i].year==this.year 
        && this.infoservice.marks[i].semester==this.sem){ 
       this.value=((+this.infoservice.marks[i].TH + +this.infoservice.marks[i].PR + +this.infoservice.marks[i].MT)/10)
       this.val=(+this.infoservice.marks[i].creditth + +this.infoservice.marks[i].creditpr)
       this.sum=+(this.value*this.val) + +this.sum
       this.credittotal=+this.val + +this.credittotal
       //console.log(this.value)
       //console.log(this.val)
     }
     //console.log(this.credittotal)
     //console.log(this.sum)
     this.totalresult=+this.sum / +this.credittotal
     console.log(this.totalresult)
    this.showresult=true;
    
    }
    console.log(this.showresult)
    console.log(this.infoservice.sgpa.length)
    for(var i=0; i<this.infoservice.sgpa.length; i++){
      if(this.infoservice.sgpa[i].enroll==this.enroll){
        this.isalready=true;
        this.editresult.enroll=this.infoservice.sgpa[i].enroll;
        this.editresult.Sem1=this.infoservice.sgpa[i].Sem1;
        this.editresult.Sem2=this.infoservice.sgpa[i].Sem2;
        this.editresult.Sem3=this.infoservice.sgpa[i].Sem3;
        this.editresult.Sem4=this.infoservice.sgpa[i].Sem4;
        this.editresult.Sem5=this.infoservice.sgpa[i].Sem5;
        this.editresult.Sem6=this.infoservice.sgpa[i].Sem6;
        this.editresult.Sem7=this.infoservice.sgpa[i].Sem7;
        this.editresult.Sem8=this.infoservice.sgpa[i].Sem8;
        this.editresult.ogpa=this.infoservice.sgpa[i].ogpa;
        console.log(this.infoservice.sgpa[i].enroll)
      }
    
    }
  }
  caclculateogpafirst(){
    let k=(+this.details1.Sem1 + +this.details1.Sem2 + +this.details1.Sem3 + +this.details1.Sem4 + 
    +this.details1.Sem5 + +this.details1.Sem6 + +this.details1.Sem7 + +this.details1.Sem8)/ +this.sem
    this.details1.ogpa=k;
  }
  
  updateamount(id,data){
    this.db.collection("Result").doc(id).set(data)
  }
  calculateogpathen(){
    this.editresult.ogpa=(+this.editresult.Sem1 + +this.editresult.Sem2 + +this.editresult.Sem3 + 
    +this.editresult.Sem4 + +this.editresult.Sem5 + +this.editresult.Sem6 + +this.editresult.Sem7 +
    +this.editresult.Sem8) / +this.sem
  }

addresult(){
  if(this.isalready){
    this.calculateogpathen()
  for(var i=0;i<this.infoservice.sgpa.length;i++){
  if(this.editresult.enroll==this.enroll){
    this.updateamount(this.infoservice.sgpa[i].id, this.editresult) 
   console.log("updated")
  }}}
  else{
    this.caclculateogpafirst();
      this.db.collection("Result").add(this.details1);
      console.log("submitted")}

}  


}
