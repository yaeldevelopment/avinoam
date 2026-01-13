import { Component, Input, input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FunctionService } from '../../service/function.service';
import  {Customer} from '../../Models/customer';
import { NotificationService } from '../../service/notification-service.service'
@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form: FormGroup;
  isLoading = false;

@Input()
ishome:boolean=false;
  constructor(private fb: FormBuilder,private func:FunctionService,private notificationService:NotificationService) {
    this.form = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.minLength(2)]],
     phone: ['', [Validators.required, Validators.pattern(/^05\d([-]?\d){7}$/)]],
      email: ['', [Validators.email]],
      message: ['']
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
customer:Customer|null=null;
onSubmit() {
  if (this.form.invalid) return;

  this.isLoading = true;

  this.customer = new Customer(
    this.form.get("firstName")?.value,
    this.form.get("lastName")?.value,
    this.form.get("phone")?.value,
    this.form.get("email")?.value,
    this.form.get("message")?.value
  );

  this.func.SendEmail(this.customer).subscribe({
    next: (res: string) => {
      this.notificationService.showPopup('success', 'הפנייה התקבלה בהצלחה', 'נתפנה ונחזור אליכם בהקדם באפשרי, תודה');
      this.form.reset();
      this.isLoading = false;
    },
    error: (err) => {
      this.notificationService.showPopup('error', 'הפנייה נכשלה', 'אנא נסו במועד מאוחר יותר, תודה');
      this.isLoading = false;
    }
  });
}
}
