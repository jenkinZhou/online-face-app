import { Component, OnInit } from '@angular/core';
import { EditorConfig } from '../config/EditorConfig';

@Component({
  selector: 'app-face-content',
  templateUrl: './face-content.component.html',
  styleUrls: ['./face-content.component.css']
})
export class FaceContentComponent implements OnInit {
  conf = new EditorConfig();


  markdown = '测试语句';
 
  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
