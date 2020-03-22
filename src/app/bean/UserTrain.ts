import { Response } from 'src/app/bean/Response';
import { UserTrainQuestionVO } from 'src/app/bean/UserTrainQuestionVO';



//当前类为接口 /createUserTrain  的参数
export class UserTrain extends Response{
    constructor(){super()};

     //用户编码
    userCode:string
    //问题套餐记录ID
    questionRecordId:number
    //当前做的题目的位置
    faceTrainQuestionIndex:number
    //当前进行的训练的类型（choose/star）
    faceTrainType:string
    //题目数目，默认50
    questionNum:number
    //过滤的题目的一级分类，保存ID，分号分割
    filterQuestionFirstType:string
    //过滤的题目的二级分类，保存ID，分号分割
    filterQuestionSecondType:string
    //过滤的题目的三级分类，保存ID，分号分割
    filterQuestionThirdType:string
    //过滤的题目的四级分类，保存ID，分号分割
    filterQuestionFourthType:string
    //过滤类型：最近一次（lastOne），两次（lastTwo），三次（lastThree）做过的不做，或者做过的（LastAll）不做,为空不过滤
    filterType:string
    //本次训练的结果
    faceTrainResult:number
    //本次训练的状态，进行中：doing,取消 ：cancel，结束：end
    faceTrainStatus:string
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
    
    }
    
    
    