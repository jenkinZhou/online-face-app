import { HttpParams, HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError, merge, OperatorFunction } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { catchError,map,mergeMap } from 'rxjs/operators';
import { Response } from '../bean/Response';
import { NzNotificationService } from 'ng-zorro-antd';
import { AppComponent } from 'src/app/app.component';
import { GetParams } from './GetParams';

@Injectable()
export class RequestUtil{

     








    static notification:NzNotificationService
     static defaultHeader = new Map();
    constructor(private http:HttpClient,private notifly:NzNotificationService) {
        RequestUtil.defaultHeader.set("uid","jenkin");
        RequestUtil.notification=this.notifly;
     }
     

     
    public   getResquest<T extends Response|any > (url:string,param?:Map<string,any>|GetParams,header?:Map<string,string>):Observable<T|any>{
            let option =this.handleOption(param,header);
            return this.http.get<T>(url,option).pipe(mergeMap(this.dealData),catchError(this.handleError)
            );
    

}
    public postResquest<T extends Response|any > (url:string,body:any , param?:Map<string,string>|GetParams,header?:Map<string,string>):Observable<T|any>{
        console.log("posturl   ",url)
        let option =this.handleOption(param,header);
        return this.http.post<T>(url,body,option).pipe(mergeMap(this.dealData),catchError(this.handleError)
        );


}

private handleOption(param?:Map<string,any>|GetParams,header?:Map<string,string>):any{
    let headers=new HttpHeaders(); 
    let params=new HttpParams();
   
    if(param!==undefined){
        if(param instanceof GetParams){
            param = param.param;
        }
        param.forEach((val,key)=>{
            params=params.set(key,val);
        })
    }
    RequestUtil.defaultHeader.forEach((val,key)=>{
        headers.append(key,val);
    });
    if(header!==undefined){
        header.forEach((val,key)=>{
            headers=  headers.set(key,val);
        });
    }
    console.log(param);
    console.log(header)
    let option = {headers:headers,params:params}
    return option;
}


private dealData<T extends Response|any> (event:any  ):OperatorFunction<HttpEvent<T>, T> {
    console.log('请求拦截',event)
     
       
        if(event.responseCode=='200'){
            // this.notification.create('success','操作成功',event.msg);
            return Observable.create(observer => observer.next(event.data)); //请求成功返回响应
        }else{
            RequestUtil.notification.error( '操作失败',event.msg);

            return Observable.create(observer => observer.next(event.data)); //请求成功返回响应
        }

     
      
};
private handleError(res: HttpResponse<any>)  {   //请求失败处理
    // console.log('失败事件', res)
    // switch (res.status) {
    //   case 401:
    //     break;
    //   case 200:
    //     break;
    //   case 404:
    //     break;
    //   case 403:
    //     break;
    // }
    if(res.status!=200){
            RequestUtil.notification.error( '系统错误: '+res.status,'系统异常，请联系管理员');
    }

        return throwError(
        res);;
  }


   


}