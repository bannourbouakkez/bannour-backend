import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  @Input() TuteurID:number;
  @Input() start:any;
  @Input() end:any;
  
  isValid: boolean = true;
  date=new Date();
  tuteur:any;
  sessions=[];

  constructor(private _clientService:ClientService) { }

  ngOnInit(): void {
  }

  instructions(){
    let TuteurID = +this.TuteurID;
    if (TuteurID == null || TuteurID==0)
     this.resetForm();
    else {
      this._clientService.getSessionsByRangeAndByTuteurID(this.start,this.end,this.TuteurID).then(res => {
        console.log(res);
        this.tuteur = res.tuteur;
        this.sessions = res.sessions;
      });
    }
  }

  reserver(i:number,SessionID:number){
    this._clientService.reserver(SessionID).then(res => {
      if(res.success){
        this.sessions[i].isReserved=1;
      }
    });
  }

  annulerReservation(i:number,SessionID:number){
    this._clientService.annulerReservation(SessionID).then(res => {
      
      if(res.success){
        this.sessions[i].isReserved=0;
      }
    });
  }

  ngOnChanges() {
    this.instructions();
  }

  resetForm() {
    this.tuteur={};
    this.sessions=[];
  }

}
