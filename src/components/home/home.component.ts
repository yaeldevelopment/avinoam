import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { ApartmentService } from '../../service/apartment.service';
import { apartment } from '../../Models/apartment';
import { CustomerComponent } from "../customer/customer.component";
import { PopupComponent } from "../popup/popup.component";
import { HeroSliderComponent } from "../hero-slider/hero-slider.component";
import { OfficeServicesComponent } from "../office-services/office-services.component";
import { ContactComponent } from "../contact/contact.component";
import { ApartmentCardComponent } from "../apartment-card/apartment-card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, SlickCarouselModule, CustomerComponent, PopupComponent, HeroSliderComponent, OfficeServicesComponent, ContactComponent, ApartmentCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    @ViewChild('slickCarousel', { static: false }) slickCarousel!: SlickCarouselComponent;
  
  data$: Observable<apartment[]> | undefined;
 slideConfig = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  infinite: false,
  arrows: true,
  autoplaySpeed: 5000,
  rtl: true,
  centerMode: false,
  variableWidth: false,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 768, // עד רוחב מסך של 768px
      settings: {
        slidesToShow: 1, // במובייל תראה שקופית אחת
        slidesToScroll: 1
      }
    }
  ]
};


  constructor(private apartmentService: ApartmentService, private router: Router) {
    this.data$ = this.apartmentService.data$;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Carousel initialization can be done here if needed
  }

  goToApartments(): void {
    this.router.navigate(['/דירות']);
  }

  dialPhone(): void {
    // Replace with your actual phone number
    const phoneNumber = '0583284763';
    window.location.href = `tel:${phoneNumber}`;
  }
}
