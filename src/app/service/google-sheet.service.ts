import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contactModel } from '../ElementPage/modole/model/contact.model';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GoogleSheetService {

  constructor(
    private http: HttpClient
  ) {
  }
  // updateSheet(data : contactModel):Observable<contactModel>{
  //   return this.http.post<contactModel>(`$${environment.CONNECTION_URL}`,{ data });
  // }
  updateSheet(Name : string, Email:string, Message :string,Checkbox : boolean ):Observable<contactModel>{
    return this.http.post<contactModel>(`${environment.CONNECTION_URL}`,{
      Name,
      Email,
      Message,
      Checkbox
    });
  }
}
