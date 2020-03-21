 
import { CanDeactivate, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
 
@Injectable()
export class QuickStartGuard implements CanDeactivate<any>,CanActivate{
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      
          return true;
    }
    canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       return true;
     
    }
   


}