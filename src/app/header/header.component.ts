import { Component, HostListener, OnInit, Renderer2, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports:[CommonModule,RouterModule ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrolled: boolean = false;
  isMenuOpen: boolean = false;
  lastScrollPosition: number = 0;
  isHidden: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Initialize any necessary logic
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    
    // Header shadow effect
    this.scrolled = currentScrollPosition > 50;
    
    // Hide header on scroll down, show on scroll up
    if (currentScrollPosition > 100 && currentScrollPosition > this.lastScrollPosition) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollPosition = currentScrollPosition;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Toggle body scroll when menu is open
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close menu if open
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  // Add ripple effect to logo click
  createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.getBoundingClientRect().left + radius)}px`;
    circle.style.top = `${event.clientY - (button.getBoundingClientRect().top + radius)}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
}