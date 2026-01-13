import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() message: string = '';  // Accept element ID
  @Output() alertResponse = new EventEmitter<{ confirmed: boolean, id: string }>();

 

 
}