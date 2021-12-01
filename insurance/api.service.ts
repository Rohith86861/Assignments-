import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


   URL="http://localhost:3000/insurance";
  postInsurance(data:any)
  {
    return this.http.post<any>(this.URL,data)
    .pipe(map((res:any)=>{
    return res;
    }))
  }
getInsurance()
  {
    return this.http.get<any>(this.URL)
    .pipe(map((res:any)=>{
    return res;
    }))
   }
  updateInsurance(data :any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/insurance/"+id,data)
    .pipe(map((res:any)=>{
    return res;
    }))
  }
  deleteInsurance(id:number)
  {
    return this.http.delete<any>(" http://localhost:3000/insurance/"+id)
    .pipe(map((res:any)=>{
    return res;

    }))
    
  }

  onEdit(id:number):Observable<any>{
    
    return this.http.get<any>( "http://localhost:3000/insurance/"+id).pipe(map((res:any)=>{
      return res;
    }))

  }
  
}