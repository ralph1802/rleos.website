import { Component } from '@angular/core';

@Component({
  selector: 'basic-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isSidebarOpen = false;

  navLinks = [
    { path: '/basic/home', label: 'Home' },
    { path: '/basic/services', label: 'Services' },
    { path: '/basic/about', label: 'About' },
    { path: '/basic/contact', label: 'Contact' }
  ];

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}
