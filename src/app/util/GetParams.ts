export class GetParams{
    param:Map<string,any>;
    constructor(){
        this.param = new Map();
    }

   static  buildParams():GetParams{
        return new GetParams();
    }

    setParam(key:string,val:any):GetParams{
        this.param.set(key,val)
        return this;
    }


}