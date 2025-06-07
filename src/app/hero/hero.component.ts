import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  imports:[CommonModule,RouterModule ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
 animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class HeroComponent implements OnInit {
  stats = [
    { number: '10K+', label: 'Active Students', icon: 'users' },
    { number: '4.9', label: 'App Rating', icon: 'star' },
    { number: '100%', label: 'Free', icon: 'award' }
  ];

  floatingElements = [
    { icon: 'book', class: 'element-1' },
    { icon: 'check-circle', class: 'element-2' },
    { icon: 'help-circle', class: 'element-3' }
  ];

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.initAnimations();
  }

  initAnimations() {
    // Hero content animation
    gsap.from('.hero-content', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.3
    });

    // Stagger animation for stats
    gsap.from('.stat-item', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: 'back.out',
      scrollTrigger: {
        trigger: '.hero-stats',
        start: 'top 80%'
      }
    });

    // Phone mockup animation
    gsap.from('.phone-mockup', {
      duration: 1.2,
      scale: 0.8,
      opacity: 0,
      rotation: -5,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.5
    });

    // Floating elements animation
    gsap.from('.floating-element', {
      duration: 1.5,
      y: 20,
      opacity: 0,
      stagger: 0.3,
      ease: 'sine.inOut'
    });

    // Continuous floating animation
    this.floatingElements.forEach((el, i) => {
      gsap.to(`.${el.class}`, {
        duration: 3 + i,
        y: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Gradient text animation
    gsap.to('.gradient-text', {
      duration: 10,
      backgroundPosition: '200% 0',
      repeat: -1,
      ease: 'linear'
    });
  }

  @HostListener('window:resize')
  onResize() {
    // Adjust animations on resize if needed
  }
}