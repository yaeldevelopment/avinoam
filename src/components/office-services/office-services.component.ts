import { Component } from '@angular/core';

@Component({
  selector: 'app-office-services',
  imports: [],
  templateUrl: './office-services.component.html',
  styleUrl: './office-services.component.scss'
})
export class OfficeServicesComponent {

 services = [
  {
    title: 'שיווק ומכירת נכסים',
    icon: 'bi-house-door text-primary'
  },
  {
    title: 'השכרת דירות ונכסים',
    icon: 'bi-building text-info'
  },
  {
    title: 'ייעוץ והשקעות בנדל"ן',
    icon: 'bi-currency-dollar text-success'
  },
  {
    title: 'הערכת שווי נכסים',
    icon: 'bi-calculator text-warning'
  },
  {
    title: 'ניהול נכסים והשכרתם',
    icon: 'bi-gear text-secondary'
  },
  {
    title: 'ליווי משפטי ורישום מקרקעין',
    icon: 'bi-file-earmark-text text-danger'
  }
];



}
