import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { TuteurService } from '../services/tuteur.service';
import { debounceTime , distinctUntilChanged  } from 'rxjs/operators';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {


  form:FormGroup;
  periodes:any=[];
  dates:any=[];

  constructor(private fb: FormBuilder,private _tuteurService:TuteurService) { }
  
  ngOnInit(): void {
    this.initForm();
    this.getPeriodes();
  }
  
  initForm(){
    this.form = this.fb.group({
      PeriodeID: [''],//Validators.required],
      DateID: ['']//,Validators.required],
    });
    //this.detectFormChanges();
  }

  /*
  submit(){

  }
  */
  
  getPeriodes(){
    this._tuteurService.getPeriodes().then(
      res => {
        this.periodes=res.periodes;
        },
      err => console.log(JSON.stringify(err))
     );
  }
  
  

  selectPeriode(e:any){
    this.form.patchValue({DateID:null});
    let PeriodeID=e.target.value;
    this.dates=[];
    if(PeriodeID>0){
      this.form.patchValue({PeriodeID:PeriodeID});
      this.getDatesByPeriodeID(PeriodeID);
    }
  }

  selectDate(e:any){
    let DateID=e.target.value;
    if(DateID>0){
      this.form.patchValue({DateID:DateID});
    }
  }
  
  getDatesByPeriodeID(PeriodeID:number){
    this._tuteurService.getDatesByPeriodeID(PeriodeID).then(
      res=>{
        this.dates=res.dates;
      },
      err=>console.log(err)
    );
  }

 

/*
  detectFormChanges() {
    this.form.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(value => this.getSessions())
  }
*/





}
