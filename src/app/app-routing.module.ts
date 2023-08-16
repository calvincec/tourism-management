import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DubaiComponent } from './dubai/dubai.component';
import { DsmComponent } from './dsm/dsm.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { LoginfomComponent } from './loginfom/loginfom.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dubai', component: DubaiComponent},
  {path: 'dsm', component: DsmComponent},
  {path: 'enquiries', component: EnquiriesComponent},
  {path: 'login', component: LoginfomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
