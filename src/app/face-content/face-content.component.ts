import { Component, OnInit } from '@angular/core';
import { EditorConfig } from '../config/EditorConfig';
import { QuickStartService } from '../service/quick-start.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ChooseTrainTypeComponent } from 'src/app/choose-train-type/choose-train-type.component';
import { UserTrainQuestionVO } from '../bean/UserTrainQuestionVO';
import { UserTrain } from '../bean/UserTrain';

@Component({
  selector: 'app-face-content',
  templateUrl: './face-content.component.html',
  styleUrls: ['./face-content.component.css']
})
export class FaceContentComponent implements OnInit {
  conf = new EditorConfig();
  // markdown = '测试语句';
  comments = '评论';
  currentTrain=new UserTrainQuestionVO;
  tabs = [
    {
      name: '评论',
      type: 'comments',
      disabled: false
    } ,
    {
      name: '题目描述',
      type: 'detail',
      disabled: false
    }
    
  ];
  isVisible=false;
  showStack=true;
  constructor(private quickStart:QuickStartService,private notifly:NzNotificationService, private  routerInfo:ActivatedRoute ) { }

  ngOnInit(): void {
    this.routerInfo.queryParams.subscribe(param => {
    this.quickStart.isTraining(param.type).subscribe(res=>{
      console.log('是否有题目',res)
      if(res){
        this.loadTrain(param.type)
      } 
     
      

    })
  })
    
     
  }
  loadTrain(type: string) {
      this.quickStart.startTrain(type).subscribe(res=>{
        console.log('结果',res);
        this.dealTrain(res)
        this.showStack=false

      })
  }
  dealTrain(res: UserTrainQuestionVO) {
    var showdown  = require('showdown')
        var converter = new showdown.Converter()
        var html = converter.makeHtml(res.faceStandardAnswer);
        this.currentTrain =res;
        this.currentTrain.faceStandardAnswer=html;
  }



  


   // 同步属性内容
   syncModel(str): void {
    this.currentTrain.faceTrainQuestionAnswer = str;
  }
  prev(){
    this.routerInfo.queryParams.subscribe(param => {
      
      this.quickStart.prevTrain(param.type,this.currentTrain.faceTrainQuestionSeq).subscribe(res=>{
        this.dealTrain(res)
      })
    })
  }
  next(){
    this.routerInfo.queryParams.subscribe(param => {
      
      this.quickStart.nextTrain(param.type,this.currentTrain.faceTrainQuestionSeq).subscribe(res=>{
        this.dealTrain(res)
      })
    })
 }
  onConfirm(event){
    
    console.log('onConfirm结果：',event)
    event.faceTrainType='choose';
    event.userCode='jenkin';
    this.quickStart.createTrain(event).subscribe(res=>{
      this.isVisible=false;
      this.routerInfo.queryParams.subscribe(param => {
        this.loadTrain(param.type)
      })
    })
  }
  onCancel( ){
    this.isVisible=false;
  }
}
