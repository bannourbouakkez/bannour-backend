import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { debounceTime , distinctUntilChanged  } from 'rxjs/operators';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-reserver-session',
  templateUrl: './reserver-session.component.html',
  styleUrls: ['./reserver-session.component.scss']
})
export class ReserverSessionComponent implements OnInit {

  form:FormGroup;
  tuteurs:any=[];
  
  constructor(private fb: FormBuilder,private _clientService:ClientService) { }
  
  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(){
    this.form = this.fb.group({
      start: [''],//Validators.required],
      end: [''],//Validators.required],
      TuteurID: ['']//,Validators.required],
    });
  }

  setTimeStart($event) {
    if($event.value){
    this.form.patchValue({start:($event.value).format("YYYY-MM-DD")});
    //this.getTuteursByPeriodeRange();
    }
  }
  setTimeEnd($event) {
    if($event.value){
    this.form.patchValue({end:($event.value).format("YYYY-MM-DD")});
    this.getTuteursByPeriodeRange();
    }
  }




  selectTuteur(e:any){
    let TuteurID=e.target.value;
    if(TuteurID>0){
      this.form.patchValue({TuteurID:TuteurID});
    }
  }
  
  getTuteursByPeriodeRange(){
    this._clientService.getTuteursByPeriodeRange(this.form.value).then(
      res=>{
        this.tuteurs=res.tuteurs;
        
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
