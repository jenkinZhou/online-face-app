import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN, NzNotificationService } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FaceBodyComponent } from './face-body/face-body.component';
import { EditorMdDirective } from './config/editor-md.directive';
import { FaceContentComponent } from './face-content/face-content.component';
import { MyStarQuestionsComponent } from './my-star-questions/my-star-questions.component';
import { QuestionTableComponent } from './question-table/question-table.component';
import { QuickStartGuard } from './guard/QuickStartGuard';
import { MyStarGuard } from './guard/MyStarGuard';
import { RequestUtil } from './util/RequestUtil';
import { ChooseTrainTypeComponent } from './choose-train-type/choose-train-type.component';
import { ChooseTrainTypeService } from './service/choose-train-type.service';
 
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    FaceBodyComponent,
    EditorMdDirective,
    FaceContentComponent,
    MyStarQuestionsComponent,
    QuestionTableComponent,
    ChooseTrainTypeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },QuickStartGuard,MyStarGuard,RequestUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
