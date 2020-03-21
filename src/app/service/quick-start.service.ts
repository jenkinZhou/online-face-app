import { Injectable } from '@angular/core';
import { RequestUtil } from '../util/RequestUtil';

@Injectable({
  providedIn: 'root'
})
export class QuickStartService {

  questions="http://127.0.0.1:8080/face/users/train-questions-suit/beginGetQuestion";
   
 
  constructor(private http:RequestUtil) { }

  getQuestion(trainType:string){
   var param = new Map();
   param.set("trainType",trainType);
   this.http.getResquest(this.questions,param).subscribe(res=>{
     console.log(res) 
   })
    
  }




}
