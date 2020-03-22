import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserTrain } from 'src/app/bean/UserTrain';
import { NzCascaderOption } from 'ng-zorro-antd';
import { ChooseTrainTypeService } from '../service/choose-train-type.service';

@Component({
  selector: 'app-choose-train-type',
  templateUrl: './choose-train-type.component.html',
  styleUrls: ['./choose-train-type.component.css']
})
export class ChooseTrainTypeComponent implements OnInit {
  static chooseTrain: ChooseTrainTypeService
  @Input()
  isConfirmLoading =false;
  @Input()
  isVisible=false;
  @Output("onConfirm") 
  onConfirm: EventEmitter<any> = new EventEmitter<any>();
  @Output("onCancel") 
  onCancel: EventEmitter<any> = new EventEmitter<any>();
  constructor( private  chooseTrain:ChooseTrainTypeService ) { 
    console.log('choose service',chooseTrain)
   }
  questionTypeData=new Array;

  userTrain =null;
  ngOnInit(): void {
      this.userTrain= new UserTrain();
      ChooseTrainTypeComponent.chooseTrain=this.chooseTrain
      console.log('choose ngOnInit',this.chooseTrain)
  }

handleOk(){
  this.userTrain.filterQuestionFirstType=( this.getLastOne(this.userTrain.filterQuestionFirstType))
  this.userTrain.filterQuestionFourthType=( this.getLastOne(this.userTrain.filterQuestionFourthType))
  this.userTrain.filterQuestionSecondType=( this.getLastOne(this.userTrain.filterQuestionSecondType))
  this.userTrain.filterQuestionThirdType=( this.getLastOne(this.userTrain.filterQuestionThirdType))
  this.onConfirm.emit(this.userTrain)
}
  getLastOne(val: Array<any>):any {
    if (val!=null&&val!=undefined&&val.length>0  ) {
      return val[val.length-1];
    }
    return null;
  }
  getConcatAll(val: Array<any>):any {
    if (val!=null&&val!=undefined&&val.length>0  ) {
      var str=""
      val.forEach(item=>{
        str= str+item+";"
      })
      return str;
    }
    return null;
  }

handleCancel(){
  this.onCancel.emit()
  // this.isVisible=false;
}
show(){
  this.isVisible=true;
}
onQuestionTypeChange(event :any){
  console.log("onQuestionTypeChange",event)
}
loadData(node: NzCascaderOption, index: number): PromiseLike<void> {
  console.log('choose loadData',ChooseTrainTypeComponent.chooseTrain)
  // let promise =ChooseTrainTypeComponent.chooseTrain.getQuestionTypeByLevelAndParent(index+2,node.value);

  return new Promise(resolve => {
    console.log('当前的级联序号',index)
    console.log('当前对象',node)
    node.children=new Array();
   ChooseTrainTypeComponent.chooseTrain.getQuestionTypeByLevelAndParent(index+2,
      node.value==undefined?0:node.value).subscribe(res=>{
      console.log('类型',res)
      res.forEach(item=>{
        node.children.push({'value':item.id,'label':item.faceQuestionTypeName,"isLeaf":item.leafFlag})
      })
      resolve()
    })
   
  });
}

}
