import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { apartment } from '../Models/apartment';
import api from '../Models/api';


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  // שימוש ב-BehaviorSubject עם ערך התחלתי
  private apartment_list = new BehaviorSubject<apartment[]>([]);
  public data$ = this.apartment_list.asObservable();
  
  private http_url: string = "";

  constructor(private http: HttpClient) {
    this.http_url = api + "apartment";
    this.Get_all_Apartment();
  }

  Get_all_Apartment(): void {
    this.http.get<apartment[]>(this.http_url).subscribe({
      next: (data: apartment[]) => {
        this.apartment_list.next(data);
      },
      error: (error) => {
        console.error('Error fetching apartments:', error);
      }
    });
  }

  // שליפת דירה לפי ID מתוך ה-Observable
  getApartmentById(id: string): Observable<apartment | undefined> {
    return this.data$.pipe(
      map(apartments => apartments.find(apt => apt.Id === id))
    );
  }

  // שליפת רשימת ערים מתוך ה-Observable
  getCities(): Observable<string[]> {
    return this.data$.pipe(
      map(apartments => {
        const cities = apartments.map(apt => apt.city);
        return [...new Set(cities)];
      })
    );
  }

  // מתודה נוספת - שליפת הערך הנוכחי של הדירות (סינכרוני)
  getCurrentApartments(): apartment[] {
    return this.apartment_list.getValue();
  }

  // מתודה נוספת - שליפת ערים באופן סינכרוני
  getCitiesSync(): string[] {
    const apartments = this.apartment_list.getValue();
    const cities = apartments.map(apt => apt.city);
    return [...new Set(cities)];
  }
}