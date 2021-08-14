import { Component, OnInit } from '@angular/core';
import { RightSideBarToggleService } from '../../../layout-shared/services/right-side-bar-toggle.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  public isCollapsed: boolean = false;

  constructor(private rightSideBarToggleService: RightSideBarToggleService) {}

  ngOnInit() {
    this.rightSideBarToggleService.getRightSidebarCollpased().subscribe(res => {
      this.isCollapsed = res;
     })
  }

  public setRightSidebarCollapseStatus() {
    this.isCollapsed = !this.isCollapsed;
    this.rightSideBarToggleService.setRightSidebarCollpased(this.isCollapsed);
  }
}
