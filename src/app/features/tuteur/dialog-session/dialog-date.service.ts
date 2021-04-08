import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DialogDateService {
  formData:any;
  datesessions=<any>[]; 

  constructor(private http: HttpClient) { }

  saveOrUpdateOrder() {
    var body = {
      ...this.formData,
      DateSessions: this.datesessions
    };
    return this.http.post<any>(environment.apiUrl + '/tuteur/date', body);
  }

  addSession(DateID,form){
    var body = {DateID:DateID,form:form}
    return this.http.post<any>(environment.apiUrl + '/tuteur/addSession',body).toPromise();;
  }
  editSession(SessionID,form){
    var body = {SessionID:SessionID,form:form}
    return this.http.post<any>(environment.apiUrl + '/tuteur/editSession',body).toPromise();;
  }



/*
  getOrderList() {
    return this.http.get(environment.apiURL + '/Order').toPromise();
  }

  deleteOrder(id:number) {
    return this.http.delete(environment.apiURL + '/Order/'+id).toPromise();
  }
*/

  

 

}