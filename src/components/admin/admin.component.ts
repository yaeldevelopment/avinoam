import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // ייבוא המודול
import { AlertComponent } from '../alert/alert.component';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule,AlertComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  myForm: FormGroup |undefined=undefined;
    isAlertVisible: boolean = false;  // Control alert visibility
    sixDigitCode: number | null = null; // Store generated 6-digit code
    message: string  = ''; // Store generated 6-digit code
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    // יצירת הטופס עם FormBuilder
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],  // שדה אימייל עם בדיקה שהוא חובה ואימייל תקין
      password: ['', [Validators.required, Validators.minLength(6)]]  // סיסמה עם מינימום 6 תווים
    });
  }
  generateSixDigitCode(): number {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
  }
  sendEmail(sixDigitCode: number): void {
   
  }

  onSubmit() {
    if (this.myForm!=undefined && this.myForm.valid) {
      if (this.myForm.get("email")?.value=='apartment0556722091@gmail.com' &&this.myForm.get("password")?.value!=='Apartment!@0556722091') {
        this.sixDigitCode = this.generateSixDigitCode();

      // Send an email with the six-digit code
      this.sendEmail(this.sixDigitCode);
      }

  
    } else {
      this.isAlertVisible=true;
      
      
    
    }
  }
  handleAlertResponse(response: { confirmed: boolean, id: string }) {
    this.isAlertVisible = false;  // Hide the alert after the response
  
    if (response.confirmed) {
      // Add your logic here, e.g., delete item or perform another action
    }
  }
}

