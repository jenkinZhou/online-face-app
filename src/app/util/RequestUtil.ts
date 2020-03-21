import { HttpParams, HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, merge } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError,map,mergeMap } from 'rxjs/operators';
import { Response } from '../bean/Response';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class RequestUtil{
    defaultHeader = new Map();
    constructor(private http:HttpClient,private notification: NzNotificationService) {
        this.defaultHeader.set("uid","jenkin");
     }

    public getResquest (url:string,param?:Map<string,string>,header?:Map<string,string>):Observable<any>{
            let option =this.handleOption(param,header);
            return this.http.get<Response>(url,option).pipe(mergeMap(this.dealData),catchError(this.handleError)
            );
    

}
    public postResquest (url:string,body:any , param?:Map<string,string>,header?:Map<string,string>):Observable<any>{
        let option =this.handleOption(param,header);
        return this.http.post<Response>(url,body,option).pipe(mergeMap(this.dealData),catchError(this.handleError)
        );


}

private handleOption(param?:Map<string,string>,header?:Map<string,string>):any{
    let headers=new HttpHeaders(); 
    let params=new HttpParams();
    console.log(param);
    console.log(header)
    if(param!==undefined){
        param.forEach((val,key)=>{
            params=params.set(key,val);
        })
    }
    this.defaultHeader.forEach((val,key)=>{
        headers.append(key,val);
    });
    if(header!==undefined){
        header.forEach((val,key)=>{
            headers=  headers.set(key,val);
        });
    }
    let option = {headers:headers,params:params}
    return option;
}


private dealData(event:any){
    if (event instanceof HttpResponse && event.status != 200) {
         return throwError(
            '请求失败');
    }else{
        if(event.responseCode=='200'){
            // this.notification.create('success','操作成功',event.msg);
            return Observable.create(observer => observer.next(event)); //请求成功返回响应
        }else{
            this.notification.create('error','操作失败',event.msg);

            return Observable.create(observer => observer.next(event)); //请求成功返回响应
        }

    }
      
};
private handleError(res: HttpResponse<any>)  {   //请求失败处理
    switch (res.status) {
      case 401:
        break;
      case 200:
        console.log('业务错误');
        break;
      case 404:
        break;
      case 403:
        console.log('业务错误');
        break;
    }
    this.notification.create('error','系统错误','系统异常，请联系管理员');

    return throwError(
        '请求失败');
  }

}