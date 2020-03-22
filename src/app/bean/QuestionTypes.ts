import { Response } from 'src/app/bean/Response';

//当前类为接口 /getQuestionTypeByLevelAndParent  的返回参数
export class QuestionTypes extends Response{


    constructor(){super();};
    id:number;
    //题目类型的名称
    faceQuestionTypeName:string
    //题目类型的级别 1,2,3,4
    faceQuestionTypeLevel:number
    //题目的父亲的ID
    parentId:number
    //逻辑删除字段
    delFlag:string
    //创建人
    createdBy:string
    //创建时间
    creationDate:any
    //更新时间
    lastUpdateDate:any
    //更新人
    lastUpdatedBy:string
    //版本号
    versionNumber:number
    //是否是叶子
    leafFlag:boolean;
    }
    