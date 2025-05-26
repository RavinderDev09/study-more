import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  darkMode: boolean = false;
  showBackToTop: boolean = false;

  ngOnInit() {
    this.checkDarkModePreference();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  changeLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const language = selectElement.value;
    // Implement your language change logic here
    console.log('Language changed to:', language);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    // You might want to save this preference to localStorage
    localStorage.setItem('darkMode', this.darkMode.toString());
  }

  private checkDarkModePreference() {
    // Check for saved user preference or system preference
    const savedPreference = localStorage.getItem('darkMode');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.darkMode = savedPreference 
      ? savedPreference === 'true'
      : systemPreference;
  }
}