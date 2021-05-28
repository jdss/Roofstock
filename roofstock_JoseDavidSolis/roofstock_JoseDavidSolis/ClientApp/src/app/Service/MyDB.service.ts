import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PropertyDB } from '../Interface/PropertyDB';

@Injectable({
  providedIn: 'root'
})
export class MyDBService {

  
  constructor(private http: HttpClient) { }


  addProperty(Property:PropertyDB) {
    return this.http.post<boolean>(`/Properties/AddProperty`,Property)

  }

  getProperties() {
    return this.http.get<PropertyDB[]>(`/Properties/GetProperties`)

  }





}
