import { Component } from '@angular/core';

@Component({
  selector: 'basic-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isSidebarOpen = false;

  toggleSidebar(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
