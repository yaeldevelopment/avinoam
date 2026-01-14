import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-hero-slider', 
   standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss'
})
export class HeroSliderComponent implements OnInit  {
  @ViewChild('slickCarousel', { static: false }) slickCarousel!: any;
  slideConfig: OwlOptions = {};
  slides: any[] = [];
  autoplay = true;
  constructor(private cdr: ChangeDetectorRef) {} // Inject ChangeDetectorRef
  ngOnInit(): void {


this.slides = [
  {
    image: 'house_family.png',
    title: 'בית החלומות למשפחה שלך',
    subtitle: 'נכסים איכותיים במיקומים אטרקטיביים ובמחירים הוגנים'
  },
  {
    image: 'real_estate_growth.png',
    title: 'השקעות נדל"ן עם תשואה בטוחה',
    subtitle: 'ניתוח שוק מקצועי ומעקב צמוד אחר הזדמנויות רווח'
  },
  {
    image: 'luxury_apartment.png',
    title: 'דירות יוקרה במרכז העיר',
    subtitle: 'עיצוב מודרני, נוחות מקסימלית ומיקום מנצח'
  },
  {
    image: 'new_building.png',
    title: 'פרויקטים חדשים לבנייה',
    subtitle: 'פיתוח נכסים מתקדמים עם ליווי אישי לכל שלב'
  }
];


this.slideConfig = {
  items: 1,
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  navSpeed: 500,
  navText: ['<span aria-label="הקודם"></span>', '<span aria-label="הבא"></span>'], // טקסט ריק עם aria-label
  rtl: true, // הפיכת כיוון לסליידר מימין לשמאל
};

this.cdr.detectChanges(); // Force change detection after data is ready

   // When slides are loaded, the *ngIf in the template will become true and render the carousel.
    
  }
@ViewChild('owl', { static: false })
owl!: CarouselComponent;
toggleAutoplay() {
  this.autoplay = !this.autoplay;


  if (this.autoplay) {
    this.owl.startAutoplay();
  } else {
    this.owl.stopAutoplay();
  }
  
  this.cdr.detectChanges();
}

}
