import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

import { Observable } from 'rxjs';
import { UserService } from '../lib/user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    
user: any;
  constructor(private router: Router, private userService: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
        this.userService.user$.subscribe((res)=> {
            this.user = res;
            // console.log(this.user.userId);
            
          })
    // const user = this.userService.userValue;
    // console.log(user.id);
    if (this.user.userId != null) {
      return true;
    }
    this.router.navigate(['/customer/login']);
    return false;
  }
}