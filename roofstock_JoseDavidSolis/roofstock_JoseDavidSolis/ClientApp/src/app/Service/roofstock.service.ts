import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjInformation } from "../Interface/properties";

@Injectable({
  providedIn: 'root'
})
export class RoofstockService {


  private baseUrl = 'https://samplerspubcontent.blob.core.windows.net/public/properties.json';
  
  constructor(private http: HttpClient) { }


  getInfo() {
    return this.http.get<ObjInformation>(`${this.baseUrl}`);

  }





}
