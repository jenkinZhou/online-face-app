 
import { CanDeactivate, CanActivate, Params } from "@angular/router";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Promise } from 'protractor/node_modules/@types/q';
import { QuickStartService } from 'src/app/service/quick-start.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { FaceBodyComponent } from 'src/app/face-body/face-body.component';
 
@Injectable()
export class QuickStartGuard implements CanDeactivate<FaceBodyComponent>,CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
           

      return true
    }
    canDeactivate(component: FaceBodyComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
        return true;
    }
    constructor(private quickStart:QuickStartService,private notifly:NzNotificationService) { }

    
     
   


}