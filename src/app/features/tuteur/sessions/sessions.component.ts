import { Component, OnInit , EventEmitter, Output, Input , ChangeDetectionStrategy} from '@angular/core';
import { TuteurService } from '../services/tuteur.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsComponent implements OnInit {
  
  //@Output() action: EventEmitter<any> = new EventEmitter<any>();
  //@Input() PeriodeID:number | null;  
  @Input() DateID:number | null;  
  
  sessions=[];
  constructor(private _tuteurService:TuteurService) { }

  ngOnInit(): void {
    this.getSessionsByDateID();
  }
  
  ngOnChanges() {
    this.sessions=[];
    this.getSessionsByDateID();
  }

  
  getSessionsByDateID(){
    if( this.DateID && this.DateID>0 ){
      this._tuteurService.getSessionsByDateID(this.DateID).then(
        res=>{
          console.log(res);
          this.sessions=res.sessions;
          console.log(this.sessions);
        },
        err=>console.log(err)
      );
    }
  }

  

}
