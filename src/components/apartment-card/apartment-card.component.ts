import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { apartment } from '../../Models/apartment';

@Component({
  selector: 'app-apartment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.scss']
})
export class ApartmentCardComponent {
  @Input() apartment!: apartment;
}