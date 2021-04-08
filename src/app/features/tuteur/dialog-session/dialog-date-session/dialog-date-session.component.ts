import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DialogDateService } from '../dialog-date.service';
import { TuteurService } from '../../services/tuteur.service';
import moment, { isMoment } from 'moment';


@Component({
  selector: 'app-dialog-date-session',
  templateUrl: './dialog-date-session.component.html',
  styleUrls: ['./dialog-date-session.component.scss']
})
export class DialogDateSessionComponent implements OnInit {

  formData;
  itemList = <any>[];
  isValid: boolean = true;
  mydate:any;
  mydatemax:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DialogDateSessionComponent>,
    private _sessionService: TuteurService,
    private _dateService: DialogDateService) { }

  ngOnInit() {
    this._sessionService.getSessionsByDateID(this.data.DateID).then(res => this.itemList = res);
    if (this.data.dateSessionIndex == null)
      this.formData = {
        SessionID: 0,
        date_id: this.data.DateID,
        timeStart: null,
        timeEnd: null
      }
    else
      this.formData = Object.assign({}, this._dateService.datesessions[this.data.dateSessionIndex]);

  //this.mydate=this.data.mydate;
  //this.mydatemax=this.addDays(this.data.mydate,1);//.format('YYYY-MM-DD');
  //this.mydate=this.addDays(this.data.mydate,-1);


  //this.mydatemax=new Date(this.mydate).setHours(20);
  let my=this.data.mydate;
  this.mydate = new Date(moment(my).format("YYYY-MM-DDT00:00:00"));
  this.mydatemax = new Date(moment(my).format("YYYY-MM-DDT23:59:00"));

  

  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  onSubmit(form: NgForm) {


    if (this.validateForm(this.formData)) {
      if (this.data.dateSessionIndex == null) {
        this._dateService.addSession(this.data.DateID, form.value).then(res => {
          console.log(res);
          if (res.success) {
            this._dateService.datesessions.push(res.session);
          } else {
            console.log('');
          }
        });
      }
      else {
        this._dateService.editSession(this.formData.SessionID, form.value).then(res => {
          if (res.success) {
            this._dateService.datesessions[this.data.dateSessionIndex] = res.session;
            console.log(res.msg);
          } else {

            console.log(res.msg);
          }
        });
      }

      this.dialogRef.close();
    } else {
      console.log('invalide form');
    }



  }

  validateForm(formData) {
    
    this.isValid = true;
    if (formData.timeStart == null)
      this.isValid = false;
    if (formData.timeEnd == null)
      this.isValid = false;
    
      if(this.isValid){
        var ts=new Date(this.formData.timeStart);
        var te=new Date(this.formData.timeEnd);
        this.isValid = ts.getTime() < te.getTime();
      }
    return this.isValid;
  }

  reglageTemps(datetime: any) {
    return datetime.getTime();
  }

  setTimeStart($event) {
    //this.formData.timeStart=($event.value).format("YYYY-MM-DD hh:mm"); // DD/MM/YYYY hh:mm
    this.formData.timeStart = ($event.value).format("YYYY-MM-DD HH:mm"); // 
  }
  setTimeEnd($event) {
    this.formData.timeEnd = ($event.value).format("YYYY-MM-DD HH:mm");
  }


}