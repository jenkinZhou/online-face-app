import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceContentComponent } from './face-content/face-content.component';
import { QuickStartGuard } from './guard/QuickStartGuard';
import { MyStarGuard } from './guard/MyStarGuard';
import { MyStarQuestionsComponent } from './my-star-questions/my-star-questions.component';
import { QuestionTableComponent } from './question-table/question-table.component';


 const routes: Routes = [
  {path:'face',component:QuestionTableComponent },
  {path:'face/quickStart',component:FaceContentComponent,canActivate:[QuickStartGuard]},
{path:'face/starTrain',component:MyStarQuestionsComponent,canActivate:[MyStarGuard]},
{path:'face/questionTable',component:QuestionTableComponent }

 ];
// const routerConfig:Routes=[
//   {path:'home',component:EvalMaintainComponent,canActivate:[RouterGuard]},
//   {path:'eval/first/:curPage',component:EvalMaintainComponent,canActivate:[RouterGuard]},
//   {path:'target/selfdate',component:TargetSelfDateMaintainComponent,canActivate:[RouterGuard]},
//    {path:'target/selfTodo',component:TargetSelfTodoComponent,canActivate:[RouterGuard]},
//   {path:'eval/ready',component:EvalDataReadyComponent,canActivate:[RouterGuard],children:[
//     {path:'',component:ReadyStepOneComponent ,canDeactivate:[RouterGuard],canActivate:[RouterGuard] },
//     {path:'stepsecond',component:ReadyStepSecondComponent ,canDeactivate:[RouterGuard] ,canActivate:[RouterGuard]},
//     {path:'stepthird',component:ReadyStepThirdComponent ,canDeactivate:[RouterGuard],canActivate:[RouterGuard] },
//     {path:'stepfourth',component:ReadyStepFourthComponent ,canDeactivate:[RouterGuard] ,canActivate:[RouterGuard]},
//     {path:'stepfifth',component:ReadyStepFifthComponent ,canDeactivate:[RouterGuard] ,canActivate:[RouterGuard]}
//   ], canDeactivate: [RouterGuard]},
//   {path:'salary/special',component:SalarySpecialConfigComponent,canActivate:[RouterGuard]},
//   {path:'salary/holiday',component:SalaryHolidayConfigComponent,canActivate:[RouterGuard]},
//   {path:'noauth',component:NoAuthPageComponent,canActivate:[RouterGuard]}
// ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
