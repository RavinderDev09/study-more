import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { TrustedByComponent } from "./trusted-by/trusted-by.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [
    CommonModule // 👈 Important
    ,
    HeaderComponent,
    HeroComponent,
    TrustedByComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
       trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
        transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('0.5s ease', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideIn', [
      state('void', style({ transform: 'translateY(20px)', opacity: 0 })),
      transition(':enter', [
        animate('0.6s ease', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('scaleIn', [
      state('void', style({ transform: 'scale(0.8)', opacity: 0 })),
      transition(':enter', [
        animate('0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  scrolled = false;
  features = [
    {
      icon: 'book',
      title: "Smart Study Plan",
      description: "Create personalized study schedules with smart recommendations based on your syllabus and exams."
    },
    {
      icon: 'chart-line',
      title: "Study Hours Tracking",
      description: "Track your daily study hours with analytics to maintain consistent study habits."
    },
    {
      icon: 'robot',
      title: "AI Doubt Solver",
      description: "Get instant explanations for complex concepts with our advanced AI assistant."
    },
    {
      icon: 'bell',
      title: "Smart Reminders",
      description: "Never miss important deadlines or study sessions with intelligent reminders."
    },
    {
      icon: 'clock',
      title: "Focus Timer",
      description: "Customizable Pomodoro timer with study analytics to maximize your efficiency."
    },
    {
      icon: 'dollar-sign',
      title: "Expense Manager",
      description: "Track your student expenses and manage your budget with smart categorization."
    }
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }
}