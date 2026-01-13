import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-popup',
  imports: [RouterOutlet],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  showPopup = false;
constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
          const lastShown = localStorage.getItem('lastPopup');
    const now = new Date().getTime();

    if (!lastShown || now - parseInt(lastShown, 10) > 24 * 60 * 60 * 1000) {
      this.showPopup = true;
      localStorage.setItem('lastPopup', now.toString());
    }
    }, 5000);

  }

  goToContact() {
    this.closePopup()
  this.router.navigate(['/צור-קשר']);
}
  closePopup() {
    this.showPopup = false;
  }
}
