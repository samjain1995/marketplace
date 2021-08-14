import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RightSideBarToggleService {

  private isRightSidebarCollpased: any = new BehaviorSubject(false);

  constructor() { }

  public setRightSidebarCollpased(isCollapsed: boolean) {
    this.isRightSidebarCollpased.next(isCollapsed);
  }

  public getRightSidebarCollpased() { 
    return this.isRightSidebarCollpased;
  }
}
