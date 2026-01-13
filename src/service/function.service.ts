import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';
import { HttpClient } from '@angular/common/http';
import api from '../Models/api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FunctionService {
apiUrl:string="";
  constructor(private http:HttpClient) {     this.apiUrl=api+"Function";}
   SendEmail(c:Customer):Observable<string>{

 return   this.http.post<string>(this.apiUrl+"/SendEmail",c,  { responseType: 'text' as 'json' });
  }
}
