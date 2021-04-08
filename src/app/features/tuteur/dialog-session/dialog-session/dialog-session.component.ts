import { Component, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import moment, { isMoment } from 'moment';
import { TuteurService } from '../../services/tuteur.service';
import { DialogDateSessionComponent } from '../dialog-date-session/dialog-date-session.component';
import { DialogDateService } from '../dialog-date.service';

@Component({
  selector: 'app-dialog-session',
  templateUrl:'./dialog-session.component.html',
  styleUrls: ['./dialog-session.component.scss']
})
export class DialogSessionComponent  {

  @Input() DateID:number;
  isValid: boolean = true;
  date=new Date();
  mydate:Date;

  constructor(public service: DialogDateService,private dialog: MatDialog,
              private _tuteurService:TuteurService) { }

  instructions(){
    let DateID = +this.DateID;
    
    if (DateID == null || DateID==0)
     this.resetForm();
    else {
      this._tuteurService.getDateByID(DateID).then(res => {
        console.log(res);
        this.service.formData = res.date;
        this.service.datesessions = res.datesessions;
        this.mydate=res.date.date;
      });
    }
  }
  

  
  ngOnChanges() {
    
    this.instructions();
  }
  

  resetForm() {
    //if (form == null)
      //form.resetForm();
    this.service.formData = {
      DateID: null,
      periode_id:null,
      date:null,
      haveSessionFromYesterday:null,
      DeletedOrderItemIDs: ''
    };
    this.service.datesessions = [];
  }



  AddOrEditOrderItem(dateSessionIndex, DateID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    let mydate = this.mydate;
    dialogConfig.data = { dateSessionIndex, DateID , mydate };
    this.dialog.open(DialogDateSessionComponent, dialogConfig).afterClosed().subscribe(res => {
      
    });
  }


  deleteSession(SessionID:number,i:number) {
    this._tuteurService.deleteSession(SessionID).then(res => {
      if(res.success){
        console.log(res.success);
        this.service.datesessions.splice(i, 1);
      }
    });
  }


  validateForm() {
    this.isValid = true;
    if (this.service.datesessions.length == 0)
      this.isValid = false;
    return this.isValid;
  }

  
  JustDateString(date:string){

    if(date==null) return date;
    if (isMoment(date)){
       return date.format('YYYY-MM-DD');
    }
    return date;
    //return date.slice(0,10);
  }
  ReglageDate(date:Date){
    date=new Date(date);
    let userTimezoneOffset = date.getTimezoneOffset() * 60000;
    let date2=new Date(this.date.getTime() - userTimezoneOffset);
    return date2;
  }
  MyThreefunc(date:Date){
    date = new Date(moment(date).format("YYYY-MM-DDTHH:mm:00"));
    return date;
  }


}