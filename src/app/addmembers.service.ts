import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Student } from 'src/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class AddmembersService {
  result :any;

  constructor(public db:AngularFirestore) {
    //this.getAppMembers();
   }
  addStudents(data){
    let tempdata : Student = data
    tempdata.enroll=data.enroll
    tempdata.name=data.name
    tempdata.gender=data.gender
    tempdata.email=data.email
    tempdata.phone=data.phone
    tempdata.branch=data.branch
    tempdata.year=data.year
    tempdata.semester=data.semester
    this.db.collection("Students").add(tempdata) 
  }

  getAppMembers(branch,year,semester){
    this.db.collection("Students",ref=>ref.where('branch','==',branch).where('year','==',year).where('semester','==',semester))
     .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(res=>{
      this.result=res;
      console.log(res)
    })
    
  }

}
