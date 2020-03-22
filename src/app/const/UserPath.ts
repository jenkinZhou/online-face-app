export class UserPath{
    /**
     * 开始做题
     */
    static BEGIN_TRAIN_PATH="/face/users/train-questions-suit/beginGetQuestion";

 /**
     * 上一题
     */
    static TRAIN_BEFORE_PATH="/face/users/train-questions-suit/getBeforeQuestion";

     /**
     * 下一题
     */
    static TRAIN_NEXT_PATH="/face/users/train-questions-suit/getNextQuestion";
    /**
     * 判断是否在做题
     */
    static IS_TRAINING_PATH="/face/users/user-train/hasTrainByType";

   /**
     * 为用户生成一套题目
     */
    static CREATE_TRAINING_PATH="/face/users/user-train/createUserTrain";
    
}