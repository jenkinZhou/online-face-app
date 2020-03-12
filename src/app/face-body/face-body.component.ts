import { Component, OnInit } from '@angular/core';
import { ModuleTree } from '../bean/ModuleTree';
import { EditorConfig } from '../config/EditorConfig';
declare var editormd: any;
@Component({
  selector: 'face-body',
  templateUrl: './face-body.component.html',
  styleUrls: ['./face-body.component.css']
})
export class FaceBodyComponent implements OnInit {
  isCollapsed = false;
  moduleTree =new Array();
 
  constructor() {
    
   }

  ngOnInit(): void {
    this.initModule();
  }
  initModule() {
    var root = new ModuleTree(
      "根节点","/root",1,-1,null,-1,1
    );
    var quickStart = new ModuleTree(
      "快速开始","/root/quickStart",2,1,null,1,1
    );
    var test = new ModuleTree(
      "测试","/root/quickStart",3,1,null,1,2
    );
    
    var test1 = new ModuleTree(
      "测试1","/root/quickStart",4,3,null,2,1
    );
    test.subModules.push(test1);

    root.subModules.push(quickStart);
    root.subModules.push(test);

    this.moduleTree = root.subModules;
  }

}
