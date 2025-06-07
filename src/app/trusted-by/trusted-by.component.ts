import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-trusted-by',
  imports: [CommonModule,RouterModule],
  templateUrl: './trusted-by.component.html',
  styleUrls: ['./trusted-by.component.scss']
})
export class TrustedByComponent implements OnInit {
  institutions = [
    { name: 'IITs', logo: 'assets/iit.-logo.png' },
    { name: 'NITs', logo: 'assets/nit-logo.png' },
    { name: 'Delhi University', logo: 'assets/du-logo.jpg' },
    { name: 'Christ University', logo: 'assets/christ-logo.png' },
    { name: 'SRM University', logo: 'assets/srm-logo.png' }
  ];

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.initAnimations();
  }

  initAnimations() {
    // Section fade in animation
    gsap.from('.trusted-by', {
      scrollTrigger: {
        trigger: '.trusted-by',
        start: 'top 80%'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Institution logos animation
    gsap.from('.institution', {
      scrollTrigger: {
        trigger: '.institutions',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    });

    // Continuous subtle float animation
    gsap.to('.institution', {
      y: -5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });
  }
}