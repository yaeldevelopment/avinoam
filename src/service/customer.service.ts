import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  distinctUntilChanged,  Subject } from 'rxjs';
import { apartment } from '../Models/apartment';
import { Customer } from '../Models/customer';
import api from '../Models/api';

@Injectable({
  providedIn: 'root'
})
export class CustomertService {
  apartment_list=new Subject<Customer[]>();
  data$=this.apartment_list.asObservable();
 http_url:string="";
  constructor(private http:HttpClient) {
        this.http_url=api+"Customers";
        this.Get_all_Customer();
   }
  Get_all_Customer(){
    this.http.get<Customer[]>(this.http_url).pipe(
      distinctUntilChanged()
   ).subscribe((data:Customer[]) => {
  this.apartment_list.next(data);
  });
  }  
}
