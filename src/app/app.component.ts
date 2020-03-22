import { Component, OnInit, Injectable, Injector } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
constructor(private notification: NzNotificationService ){}

  title = 'online-face-app';
  
}
