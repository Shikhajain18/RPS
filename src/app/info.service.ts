import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { stringify } from 'querystring';
import { Courses } from 'src/models/Courses.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  result :any;
  enroll
  out
  output
  isSem1=false
  isSem2=false
  isSem3=false
  isSem4=false
  isSem5=false
  isSem6=false
  isSem7=false
  isSem8=false
  backlog0
  backlog1
  backlog2
  backlog3
  backlog4
  backlog5
  sgpa
  public marks : any
  report
  finalresult

  Marks:{result: any,MT: string,TH: string,PR: string,creditpr: string,creditth: string,subject: string,code: string}={result:null,MT:"",TH:"",PR:"",creditth:"",creditpr:"",subject:"",code:""}
  
  
  entry:{semester: string,year: string,enroll: string,name: string}={semester:"",year:"",enroll:"",name:""};
  constructor(public db:AngularFirestore,public router:Router) {
    
   }
   
    
   addCourses(data){
    let tempdata : Courses = data
    tempdata.branch=data.branch
    tempdata.year=data.year
    tempdata.semester=data.semester
    tempdata.subject=data.subject;
    tempdata.maxtheory=data.maxtheory;
    tempdata.maxpractical=data.maxpractical;
    tempdata.creditpr=data.creditpr;
    tempdata.creditth=data.creditth;
    tempdata.code=data.code;
    
    this.db.collection("Courses").add(tempdata) 
  }
  getAppMembers(branch,year,semester,enroll,name){
    this.db.collection("Courses",ref=>ref.where('branch','==',branch).where('year','==',year).where('semester','==',semester))
     .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id,enroll,name, ...data};
      }))
    ).subscribe(res=>{
      this.result=res;
      
      console.log(res)
    })
    this.router.navigateByUrl('/marks')
    
    
  }
  addMarks(data){
    if(this.result[0]){
    let tempdata0 ={backlog:"",year:"",semester:"",enroll:"",MT:"",TH:"",PR:"",creditth:"",creditpr:"",subject:"",code:""};
    tempdata0.MT=data.MT0
    tempdata0.TH=data.TH0
    tempdata0.PR=data.PR0
    tempdata0.enroll=this.result[0].enroll
    tempdata0.creditth=this.result[0].creditth
    tempdata0.creditpr=this.result[0].creditpr
    tempdata0.code=this.result[0].code
    tempdata0.subject=this.result[0].subject
    tempdata0.semester=this.result[0].semester
    tempdata0.year=this.result[0].year
    tempdata0.backlog=this.backlog0
    console.log(tempdata0)
    
    
    this.db.collection("Marks").add(tempdata0)
  //this.backlog0=""
 }
  
  if(this.result[1]){
    let tempdata1 ={backlog:"",year:"",semester:"",enroll:"",MT:"",TH:"",PR:"",creditth:"",creditpr:"",subject:"",code:""};
    tempdata1.MT=data.MT1
    tempdata1.TH=data.TH1
    tempdata1.PR=data.PR1
    tempdata1.enroll=this.result[1].enroll
    tempdata1.creditth=this.result[1].creditth
    tempdata1.creditpr=this.result[1].creditpr
    tempdata1.code=this.result[1].code
    tempdata1.subject=this.result[1].subject
    tempdata1.year=this.result[1].year
    tempdata1.semester=this.result[1].semester
    tempdata1.backlog=this.backlog1
    console.log(tempdata1)
    
    
    this.db.collection("Marks").add(tempdata1)
    //this.backlog1="" 
  }
    if(this.result[2]){
      let tempdata2 ={backlog:"",year:"",semester:"",enroll:"",MT:"",TH:"",PR:"",creditth:"",creditpr:"",subject:"",code:""};
      tempdata2.MT=data.MT2
      tempdata2.TH=data.TH2
      tempdata2.PR=data.PR2
      tempdata2.enroll=this.result[2].enroll
      tempdata2.creditth=this.result[2].creditth
      tempdata2.creditpr=this.result[2].creditpr
      tempdata2.code=this.result[2].code
      tempdata2.subject=this.result[2].subject
      tempdata2.semester=this.result[2].semester
      tempdata2.year=this.result[2].year
      tempdata2.backlog=this.backlog2
      console.log(tempdata2)
      
      
      this.db.collection("Marks").add(tempdata2)
      //this.backlog2="" 
    }
      if(this.result[3]){
        let tempdata3 ={backlog:"",semester:"",year:"",enroll:"",MT:"",TH:"",PR:"",creditth:"",creditpr:"",subject:"",code:""};
        tempdata3.MT=data.MT3
        tempdata3.TH=data.TH3
        tempdata3.PR=data.PR3
        tempdata3.enroll=this.result[3].enroll
        tempdata3.creditth=this.result[3].creditth
        tempdata3.creditpr=this.result[3].creditpr
        tempdata3.code=this.result[3].code
        tempdata3.subject=this.result[3].subject
        tempdata3.semester=this.result[3].semester
        tempdata3.year=this.result[3].year
        tempdata3.backlog=this.backlog3
        console.log(tempdata3)
        
        
        this.db.collection("Marks").add(tempdata3) 
        //this.backlog3=""
      }
        if(this.result[4]){
          let tempdata4 ={backlog:"",semester:"",year:"",enroll:"",MT:"",TH:"",PR:"",creditth:"",creditpr:"",subject:"",code:""};
          tempdata4.MT=data.MT4
          tempdata4.TH=data.TH4
          tempdata4.PR=data.PR4
          tempdata4.enroll=this.result[4].enroll
          tempdata4.creditth=this.result[4].creditth
          tempdata4.creditpr=this.result[4].creditpr
          tempdata4.code=this.result[4].code
          tempdata4.subject=this.result[4].subject
          tempdata4.semester=this.result[4].semester
          tempdata4.year=this.result[4].year
          tempdata4.backlog=this.backlog4
          console.log(tempdata4)
          
          
          this.db.collection("Marks").add(tempdata4)
          //this.backlog4="" 
        }
          if(this.result[5]){
            let tempdata5 ={backlog:"",semester:"",year:"",enroll:"",MT:"",TH:"",PR:"",creditth:"",creditpr:"",subject:"",code:""};
            tempdata5.MT=data.MT5
            tempdata5.TH=data.TH5
            tempdata5.PR=data.PR5
            tempdata5.enroll=this.result[5].enroll
            tempdata5.creditth=this.result[5].creditth
            tempdata5.creditpr=this.result[5].creditpr
            tempdata5.code=this.result[5].code
            tempdata5.subject=this.result[5].subject
            tempdata5.semester=this.result[5].semester
            tempdata5.year=this.result[5].year
            tempdata5.backlog=this.backlog5
            console.log(tempdata5)
            
            
            this.db.collection("Marks").add(tempdata5)
            //this.backlog5="" 
          }
  
        }
  getBacklog(data){
    if(this.result[0]){
      if(this.result[0].maxtheory==70){
        this.out=(+data.MT0 + +data.TH0)/70
        
        this.output=this.out * 100
        
        if(this.output>30){
          this.backlog0="No" 
        }
        else{
          this.backlog0="Yes"
        }
      }
    
      else{
        this.out=(+data.MT0 + +data.TH0)/100
        this.output=this.out * 100
        if(this.output>40){
          this.backlog0="No" 
        }
        else{
          this.backlog0="Yes"
        }
      }
      
      }
      if(this.result[1]){
        if(this.result[1].maxtheory==70){
          this.out=(+data.MT1 + +data.TH1)/70
          this.output=this.out * 100
          if(this.output>30){
            this.backlog1="No" 
          }
          else{
            this.backlog1="Yes"
          }
        }
      
        else{
          this.out=(+data.MT1 + +data.TH1)/100
          this.output=this.out * 100
          if(this.output>40){
            this.backlog1="No" 
          }
          else{
            this.backlog1="Yes"
          }
        }
        }
        if(this.result[2]){
          if(this.result[2].maxtheory==70){
            this.out=(+data.MT2 + +data.TH2)/70
            this.output=this.out * 100
            if(this.output>30){
              this.backlog2="No" 
            }
            else{
              this.backlog2="Yes"
            }
          }
        
          else{
            this.out=(+data.MT2 + +data.TH2)/100
            this.output=this.out * 100
            if(this.output>40){
              this.backlog2="No" 
            }
            else{
              this.backlog2="Yes"
            }
          }
          }
          if(this.result[3]){
            if(this.result[3].maxtheory==70){
              this.out=(+data.MT3 + +data.TH3)/70
              this.output=this.out * 100
              if(this.output>30){
                this.backlog3="No" 
              }
              else{
                this.backlog3="Yes"
              }
            }
          
            else{
              this.out=(+data.MT3 + +data.TH3)/100
              this.output=this.out * 100
              if(this.output>40){
                this.backlog3="No" 
              }
              else{
                this.backlog3="Yes"
              }
            }
            }
            if(this.result[4]){
              if(this.result[4].maxtheory==70){
                this.out=(+data.MT4 + +data.TH4)/70
                this.output=this.out * 100
                if(this.output>30){
                  this.backlog4="No" 
                }
                else{
                  this.backlog4="Yes"
                }
              }
            
              else{
                this.out=(+data.MT4 + +data.TH4)/100
                this.output=this.out * 100
                if(this.output>40){
                  this.backlog4="No" 
                }
                else{
                  this.backlog4="Yes"
                }
              }
              }
              if(this.result[5]){
                if(this.result[5].maxtheory==70){
                  this.out=(+data.MT5 + +data.TH5)/70
                  this.output=this.out * 100
                  if(this.output>30){
                    this.backlog5="No" 
                  }
                  else{
                    this.backlog5="Yes"
                  }
                }
              
                else{
                  this.out=(+data.MT5 + +data.TH5)/100
                  this.output=this.out * 100
                  if(this.output>40){
                    this.backlog5="No" 
                  }
                  else{
                    this.backlog5="Yes"
                  }
                }
                }
}
getMarks(){
  this.db.collection("Marks",ref=>ref)
   .snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  ).subscribe(res=>{
    this.marks=res;
    console.log(this.marks)
  })    
} 


getresult(){
  this.db.collection("Result",ref=>ref)
   .snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  ).subscribe(res=>{
    this.sgpa=res;
    console.log(this.sgpa)
  })    
} 


searchReportcard(data){
  // entry={semester:"",year:"",enroll:"",name:""};
  this.entry.year=data.year;
  this.entry.semester=data.semester;
  this.entry.name=data.name;
  this.entry.enroll=data.enroll;
  this.router.navigateByUrl("/marksheet")
}

getReportMembers(enroll,semester){
  this.db.collection("Marks",ref=>ref.where('enroll','==',enroll).where('semester','==',semester))
   .snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data};
    }))
  ).subscribe(res=>{
    this.report=res;
    
    console.log(res)
  })

  
  
}
getFinalResult(enroll,semester){
  this.db.collection("Result",ref=>ref.where('enroll','==',enroll))
   .snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data};
    }))
  ).subscribe(res=>{
    this.finalresult=res;
    
    console.log(res)
  })
  if(semester==1){
    this.isSem1=true;
console.log(this.isSem1);

  }
  else{
    this.isSem1=false; 
  }
  if(semester==2){
    this.isSem2=true;
    console.log(this.isSem2);

  }
  else{
    this.isSem2=false; 
  }
  if(semester==3){
    this.isSem3=true;
    console.log(this.isSem3);

  }
  else{
    this.isSem3=false; 
  }
  if(semester==4){
    this.isSem4=true;
    console.log(this.isSem4);

  }
  else{
    this.isSem4=false; 
  }
  if(semester==5){
    this.isSem5=true;
    console.log(this.isSem5);

  }
  else{
    this.isSem5=false; 
  }
  if(semester==6){
    this.isSem6=true;
    console.log(this.isSem6);

  }
  else{
    this.isSem6=false; 
  }
  if(semester==7){
    this.isSem7=true;
    console.log(this.isSem7);

  }
  else{
    this.isSem7=false; 
  }
  if(semester==8){
    this.isSem8=true;
    console.log(this.isSem8);

  }
  else{
    this.isSem8=false; 
  }
}




  
}

