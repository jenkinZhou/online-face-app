
//当前类为接口 /getBeforeQuestion  的返回参数
export class UserTrainQuestionVO {


constructor(){};
//当前题目的ID
faceTrainQuestionId:number
//训练计划的ID
faceTrainId:number
//生成的题目的序号
faceTrainQuestionSeq:number
//当前题目你的解答
faceTrainQuestionAnswer:string
//1-10 的整数，当前题目的困难程度
faceTrainDifficulty:number
//当前题目你认为是否通过（Y、N）
faceTrainPass:string
//你对当前题目做的笔记
faceTrainNote:string
//用户编码
userCode:string
//问题套餐记录ID
questionRecordId:number
//当前做的题目的位置
faceTrainQuestionIndex:number
//当前进行的训练的类型（自定义随机）
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
//本次训练的状态
faceTrainStatus:string
//题目标题
faceTitle:string
//题目描述
faceContent:string
//题目标准答案
faceStandardAnswer:string
//题目的三级分类（基础，并发，网络。。。）
faceTypeThird:number
//题目的二级分类（java，C，C++。。。）
faceTypeSecond:number
//题目的以及分类（计算机网络、编程语言）
faceTypeFirst:number
//题目标签
faceTag:string
//答案描述
answerNote:string
//题目描述
faceNote:string
//题目的审核状态
faceApproveStatus:string

}