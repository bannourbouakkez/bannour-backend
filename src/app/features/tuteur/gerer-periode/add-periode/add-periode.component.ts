import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TuteurService } from '../../services/tuteur.service';
import moment, { isMoment } from 'moment';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayDataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-add-periode',
  templateUrl: './add-periode.component.html',
  styleUrls: ['./add-periode.component.scss']
})
export class AddPeriodeComponent implements OnInit {

  PeriodeID: number = 0;
  dates: any[] = [];
  newDates=[];
  periodeLoaded = false;
  ldates = [];
  public dateTime2: Date;
  public startAt = new Date(2021, 3, 1, 10, 30);
  date = null;
  datesToDelete: number[] = [];
  range = new FormGroup({
    start: new FormControl('',Validators.required),
    end: new FormControl('',Validators.required)
  });

  formDate: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _tuteurService: TuteurService,
    public dialogRef: MatDialogRef<AddPeriodeComponent>, @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    this.PeriodeID = this.data.PeriodeID;
    this.InitForm();
    if(this.PeriodeID)
    this.getPeriodeWithDates(this.PeriodeID);
    else
    this.periodeLoaded=true;
  }

  InitForm() {
    this.formDate = this._formBuilder.group({
      date: ['']
    });
  }

  getPeriodeWithDates(PeriodeID: number) {
    this._tuteurService.getPeriodeWithDates(PeriodeID).then(
      res => {
        console.log(res);
        this.range.patchValue({ start: res.start });
        this.range.patchValue({ end: res.end });
        this.dates = res.dates;
        this.periodeLoaded = true;
      });
  }

  submit() {
    if (!this.PeriodeID)
      this.addPeriode();
    if (this.PeriodeID)
      this.editPeriode(this.PeriodeID);
  }

  addPeriode() {
    console.log(this.range.value);
    if(this.range.valid){
    this._tuteurService.addDisponibilite(this.range.value, this.dates).then(
      res => {
        if (res.success) {
          this.dialogRef.close(res);
        } else {
          this.dialogRef.close(res);
        }
      });
    }else{
      console.log('invalid form');
    }
  }

  editPeriode(PeriodeID: number) {
    if(this.range.valid){
    this._tuteurService.editPeriode(PeriodeID,this.range.value,this.dates,this.datesToDelete).then(
      res => {
        console.log(res);
        if (res.success) {
          this.dialogRef.close(res);
        } else {
          this.dialogRef.close(res);
        }
      });
    }else{
      console.log('invalid form');
    }
  }



  pickDate($event) {
    this.formDate.reset();
    let date: any = {};
    date.DateID = 0;
    date.date = ($event.value).format("YYYY-MM-DD");
    date.haveReservation = false;

    let isExist = false;
    for (let i = 0; i < this.dates.length; i++) {
      if (this.dates[i].date == date.date) {
        isExist = true;
      }
    }
    if (!isExist) {
      this.dates.push(date);
    }

  }

  deleteDate(DateID: number, i: number) {
    this.dates.splice(i, 1);
    if (DateID > 0) {
      this.datesToDelete.push(DateID);
    }
  }


  
  /*
  public myFilter = (d: Date): boolean => {
    //const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return d==new Date("2012-04-01");
  }
  */

  myFilter = (d: Date): boolean => {
    var c = new Date();
    var c = new Date('04/04/2021');

    var cday = c.getDate();
    var cmonth = c.getMonth() + 1;
    var cyear = c.getFullYear();
    var dday = moment(d).day();
    var dmonth = moment(d).month() + 1; // +1
    var dyear = moment(d).year();

    return !this.compareTwoDate(dday, cday, dmonth, cmonth, cyear, dyear);
  }

  compareTwoDate(dday: number, cday: number, dmonth: number, cmonth: number, cyear: number, dyear: number) {
    console.log(dday, cday, dmonth, cmonth, cyear, dyear);
    return cmonth == dmonth && cday == dday && cyear == dyear;
  }

  dateIsBetweenStartEnd(date,start,end) {
    var dd=new Date(date);
    var ds=new Date(start);
    var de=new Date(end);
    console.log(dd,ds,de);
    return  ( dd.getTime() >= ds.getTime() )  && ( dd.getTime() <= de.getTime() ) ; 
  }




  setTimeStart($event) {
    if($event.value)
    this.range.patchValue({start:($event.value).format("YYYY-MM-DD")});
  }
  setTimeEnd($event) {
    if($event.value){
    this.range.patchValue({end:($event.value).format("YYYY-MM-DD")});
    this.dates=this.deleteDateOutOfRange();
    }
  }

  deleteDateOutOfRange(){
    let newArr=[];
    for(let i=0;i<this.dates.length;i++){
      let d=new Date(this.dates[i].date);
      let start = this.range.get('start').value;
      let end = this.range.get('end').value;
      if(this.dateIsBetweenStartEnd(d,start,end)){
        newArr.push(this.dates[i]);
      }
    } 
    return newArr;
  }

  




}
