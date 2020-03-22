import { Injectable } from '@angular/core';
import { RequestUtil } from '../util/RequestUtil';
import { UserPath } from 'src/app/const/UserPath';
import { UserTrainQuestionVO } from 'src/app/bean/UserTrainQuestionVO';
import { Observable } from 'rxjs';
 import { NzNotificationService } from 'ng-zorro-antd';
import { UserTrain } from '../bean/UserTrain';
import { GetParams } from '../util/GetParams';

@Injectable({
  providedIn: 'root'
})
export class QuickStartService {

    
 
  constructor(private http:RequestUtil,private notifly:NzNotificationService) { }
  /**
   * 开始做题
   * @param trainType 训练类型
   */
  startTrain(trainType:string):Observable<UserTrainQuestionVO>{
    var param = new Map();
     param.set("trainType",trainType)
    return this.http.getResquest<UserTrainQuestionVO>(UserPath.BEGIN_TRAIN_PATH,param).pipe() 
   }
   /**
    * 是否已经开始做题
    * @param trainType 训练类型
    */
   isTraining(trainType:string):Observable<boolean>{
    var param = new Map();
    param.set("trainType",trainType)
     return this.http.getResquest<boolean>(UserPath.IS_TRAINING_PATH,param) 
    }
    /**
     * 
     * @param userTrain 用户创建题目
     */
    createTrain(userTrain:UserTrain):Observable<any>{
     return  this.http.postResquest(UserPath.CREATE_TRAINING_PATH, userTrain)
    }

/**
   * 上一题
   * @param trainType 训练类型
   */
  prevTrain(trainType:string,index:number):Observable<UserTrainQuestionVO>{
    let param = GetParams.buildParams().setParam("trainType",trainType).setParam("index",index)

    return this.http.getResquest<UserTrainQuestionVO>(UserPath.TRAIN_BEFORE_PATH,param)
   }

   /**
   * 下一题
   * @param trainType 训练类型
   */
  nextTrain(trainType:string,index:number):Observable<UserTrainQuestionVO>{
    let param =  GetParams.buildParams().setParam("trainType",trainType).setParam("index",index)
    return this.http.getResquest<UserTrainQuestionVO>(UserPath.TRAIN_NEXT_PATH,param) 
   }



}
