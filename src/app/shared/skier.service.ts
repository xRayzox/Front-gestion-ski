import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skier } from '../model/skier';


@Injectable({
  providedIn: 'root'
})
export class SkierService {
  private apiUrl = 'http://192.168.56.2:8089/api/skier';
  private BASE_URL='';

  constructor(private http:HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }
  deleteFood(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, { responseType: 'text' });
  }
  addSubscription(subscription: Skier): Observable<Skier> {
    return this.http.post<Skier>(`${this.apiUrl}/add`, subscription);
  }

}
