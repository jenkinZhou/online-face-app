import { Injectable } from '@angular/core';
import { RequestUtil } from '../util/RequestUtil';
import { GetParams } from '../util/GetParams';
import { ChooseTrain } from '../const/ChooseTrain';
import { QuestionTypes } from '../bean/QuestionTypes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChooseTrainTypeService {

  constructor(private http:RequestUtil) { }


getQuestionTypeByLevelAndParent(level:number,parent:number):Observable<Array<QuestionTypes>>{
  console.log('调用')
  let param = GetParams.buildParams().setParam("level",level).setParam("parent",parent);
  return this.http.getResquest<Array<QuestionTypes>>(ChooseTrain.QUESTION_TYPES_PATH, param);
}

}
