import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
/*import { User } from './user';*/

import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  headers= new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions={
    headers:this.headers
  }

  constructor(private http:HttpClient) { }
  URL:string="http://localhost:3000/users";

  getUsers():Observable<any>{
    /*console.log("u-r-l");*/
    return this.http.get<User[]>(this.URL);
  }
  deleteUser(id:string):Observable<any>{
   /* const url= `${this.URL}/${id}`;
    return this.http.delete<User[]>(this.URL,this.httpOptions)*/
    let deleteURL=this.URL + "/" + id;
    console.log("URL:"+deleteURL);
    return this.http.delete(deleteURL);


  }
  insertData(userObj:User):Observable<any>
  {
    let header={'content-type':'application/json'};
    let body=JSON.stringify(userObj);
    console.log("data"+body)
    return this.http.post(this.URL,body,{'headers':header})
  }
  updatedUser(id:number):Observable<any>{
    const url= `${this.URL}/${id}`;
    return this.http.delete<User[]>(this.URL,this.httpOptions)

  }

}
