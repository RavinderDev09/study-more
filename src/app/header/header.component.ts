import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-header',
  imports:[CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrolled = offset > 50;
  }

  ngOnInit() {
    // Initialize any animations after view init
    setTimeout(() => {
      this.animateElements();
    }, 100);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  private animateElements() {
    // You can add GSAP or other animation logic here if needed
    // For example:
    // gsap.from('.logo-container', { duration: 0.8, y: -50, opacity: 0, ease: 'power2.out' });
    // gsap.from('.nav-link', { duration: 0.5, y: 20, opacity: 0, stagger: 0.1, ease: 'back.out' });
  }

  // Smooth scroll to section
  scrollTo(sectionId: string) {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}