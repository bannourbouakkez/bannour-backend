import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TuteurService } from '../../services/tuteur.service';
import { AddPeriodeComponent } from '../add-periode/add-periode.component';

@Component({
  selector: 'app-liste-periodes',
  templateUrl: './liste-periodes.component.html',
  styleUrls: ['./liste-periodes.component.scss']
})
export class ListePeriodesComponent implements OnInit {

  load=false;
  periodes=[];
  constructor(private dialog: MatDialog,private _tuteurService:TuteurService) { }

  ngOnInit(): void {
    this.getPeriodesWithDates();
  }


  getPeriodesWithDates(){
    this._tuteurService.getPeriodesWithDates().then(
      res => {
         this.periodes=res;
         this.load=true;
      });
  }

  deletePeriode(PeriodeID:number,i:number){
    this._tuteurService.deletePeriode(PeriodeID).then(
      res => {
        if(res.success){
          this.periodes.splice(i, 1);
        }else{
          console.log('failed');
        }
      });
  }
  


  addOrEditPeriode(PeriodeID:number,i:number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { PeriodeID }; 
    this.dialog.open(AddPeriodeComponent, dialogConfig).afterClosed().subscribe(res => {
     if(res != undefined && res != null){
         if(res.success){
          if(!PeriodeID){
          this.periodes.push(res.periode);
          console.log(res.msg);
          }
          else{
           this.periodes[i]=res.periode;
           console.log(res.msg);
          }
         }else{
           console.log(res.msg);
         }
      }
    });
  }

}
