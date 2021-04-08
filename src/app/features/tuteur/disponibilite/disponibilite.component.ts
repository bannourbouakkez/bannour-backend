import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { TuteurService } from '../services/tuteur.service';

@Component({
  selector: 'app-disponibilite',
  templateUrl: './disponibilite.component.html',
  styleUrls: ['./disponibilite.component.scss']
})
export class DisponibiliteComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  dates=[];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  
  constructor(private _formBuilder: FormBuilder,private _tuteurService:TuteurService) {}

  ngOnInit() {
    /*
    this.firstFormGroup = this._formBuilder.group({
      //firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });
    */
  }

  Action(e:any){
    this.dates=e;
  }

  submit(){
    this._tuteurService.addDisponibilite(this.range.value,this.dates).then(
      res => {
         if(res.success){
         }else{
         }
      });
  }


}