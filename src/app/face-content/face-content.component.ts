import { Component, OnInit } from '@angular/core';
import { EditorConfig } from '../config/EditorConfig';
import { QuickStartService } from '../service/quick-start.service';

@Component({
  selector: 'app-face-content',
  templateUrl: './face-content.component.html',
  styleUrls: ['./face-content.component.css']
})
export class FaceContentComponent implements OnInit {
  conf = new EditorConfig();


  markdown = '测试语句';
  value = '评论';
 
  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }
  tabs = [
    {
      name: '题目描述',
      type: 'detail',
      disabled: false
    },
    {
      name: '评论',
      type: 'comments',
      disabled: false
    } 
  ];
  constructor(private quickSeart:QuickStartService) { }

  ngOnInit(): void {
    
      this.quickSeart.getQuestion("choose")
  }

}
