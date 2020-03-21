export class ModuleTree{
    public moduleName:string;
    public moduleUrl:string;
    public moduleId:number;
    public moduleParentId:number;
    public subModules:Array<ModuleTree>;
    public moduleIcon:string;
    public moduleLevel:number;
    public moduleSeq:number;
    public moduleCode:string;
    constructor(moduleName:string,moduleCode:string,moduleUrl:string,moduleId:number,
        moduleParentId:number,moduleIcon:string,moduleLevel:number,
        moduleSeq:number){
            this.moduleIcon=moduleIcon;
            this.moduleId = moduleId;
            this.moduleLevel=moduleLevel;
            this.moduleName=moduleName;
            this.moduleUrl=moduleUrl;
            this.moduleParentId = moduleParentId;
            this.subModules = new Array();
            this.moduleSeq = moduleSeq;
            this.moduleCode=moduleCode;
        }
      
   

}