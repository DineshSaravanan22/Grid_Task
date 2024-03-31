import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AgGrid} from'../models/quotation'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseurl= 'https://localhost:7049/api/gridTask';

  constructor( private http:HttpClient) { }
  // Data get method
  getData():Observable<any>{
   return this.http.get(this.baseurl)
  }
  // Data save method
  saveData(data:any) :Observable<any>{
  return this.http.post(this.baseurl,data);
  }

  // Data delete method
  daleteValue(id:any) :Observable<any>{ 
    return this.http.delete(`${this.baseurl}?Id=${id}`);
    }
  getSingleUserData(id:any):Observable<any>{
    return this.http.get(`${this.baseurl}/${id}`)
  }
    // Data delete method
  editValue(id:any,data:any) :Observable<any>{
    return this.http.put(`https://angulartask-cfd32-default-rtdb.firebaseio.com/data/${id}.json`,data);
    }
  
}