import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TuteurService {

  constructor(private _http:HttpClient) { }
   
  addDisponibilite(range:any,dates:any){
    var body={range:range,dates:dates};
    console.log(body);
    return this._http.post<any>(environment.apiUrl+'/tuteur/addDisponibilite',body).toPromise();
  }

  editPeriode(PeriodeID:number,range:any,dates:any,dateToDelete:any){
    var body={range:range,dates:dates,dateToDelete:dateToDelete};
    return this._http.post<any>(environment.apiUrl+'/tuteur/editPeriode/'+PeriodeID,body).toPromise();

  }


  getPeriodes(){
    return this._http.get<any>(environment.apiUrl+'/tuteur/getPeriodes').toPromise();
  }

  getDatesByPeriodeID(PeriodeID:number){
    return this._http.get<any>(environment.apiUrl+'/tuteur/getDatesByPeriodeID/'+PeriodeID).toPromise();
  }

  getSessionsByDateID(DateID:number){
    return this._http.get<any>(environment.apiUrl+'/tuteur/getSessionsByDateID/'+DateID).toPromise();
  }

  getDateByID(DateID:number):any {
    return this._http.get<any>(environment.apiUrl + '/tuteur/getDateByID/'+DateID).toPromise();
  }

  deleteSession(SessionID:number):any {
    return this._http.get<any>(environment.apiUrl + '/tuteur/deleteSession/'+SessionID).toPromise();
  }
  
  getPeriodeWithDates(PeriodeID:number){
    return this._http.get<any>(environment.apiUrl + '/tuteur/getPeriodeWithDates/'+PeriodeID).toPromise();
  }

  getPeriodesWithDates(){
    return this._http.get<any>(environment.apiUrl + '/tuteur/getPeriodesWithDates').toPromise();
  }

  deletePeriode(PeriodeID:number){
    return this._http.get<any>(environment.apiUrl + '/tuteur/deletePeriode/'+PeriodeID).toPromise();
  }
  
}
