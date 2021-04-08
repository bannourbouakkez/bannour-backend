import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _http:HttpClient) { }
  
  getTuteursByPeriodeRange(form:any){
  var body={range:form};
  return this._http.post<any>(environment.apiUrl+'/client/getTuteursByPeriodeRange',body).toPromise();
  }

  getSessionsByRangeAndByTuteurID(start:any,end:any,TuteurID:number){
    var body={start:start,end:end,TuteurID:TuteurID};
    return this._http.post<any>(environment.apiUrl+'/client/getSessionsByRangeAndByTuteurID',body).toPromise();
  }

  reserver(SessionID:number){
    return this._http.get<any>(environment.apiUrl+'/client/reserver/'+SessionID).toPromise();
  }
  
  annulerReservation(SessionID:number){
    return this._http.get<any>(environment.apiUrl+'/client/annulerReservation/'+SessionID).toPromise();
  }

  

  


}


