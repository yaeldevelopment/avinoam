import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { AdminComponent } from '../admin/admin.component';
import { PolicyPrivacyComponent } from '../policy-privacy/policy-privacy.component';
import { ContactComponent } from '../contact/contact.component';
import { QuestionsAnswersComponent } from '../questions-answers/questions-answers.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Apartments } from '../apartments/apartments';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ניהול', component: AdminComponent },
  { path: 'דירות', component: Apartments },
  { path: 'צור-קשר', component: ContactComponent },
  { path: 'שאלות-ותשובות', component: QuestionsAnswersComponent },
  { path: 'אודות', component: AboutComponent },
  { path: 'מדיניות-ופרטיות', component: PolicyPrivacyComponent },
  { path: '**', component: NotFoundComponent }
];
