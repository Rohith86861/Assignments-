import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  log(msg:any){
    let messageForLoggin=new Date() + " "+msg;
    var timestamp:any=function(){};
    timestamp.toString = function(){
      return (new Date).toLocaleTimeString();    
  };

    let m1= new Date()+" "+timestamp+" "+msg;
    console.log(messageForLoggin);
    console.info(m1);
    console.warn(m1);
    console.error(m1);
    console.debug(m1);
  }
}
