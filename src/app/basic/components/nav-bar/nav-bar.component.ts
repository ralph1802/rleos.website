import { Component, HostListener } from '@angular/core';

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

  // Alterna el estado del sidebar
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Cierra el sidebar
  closeSidebar(): void {
    this.isSidebarOpen = false;
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 40) {
      this.closeSidebar();
    }
  }
}
