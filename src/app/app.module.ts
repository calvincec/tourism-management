import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DubaiComponent } from './dubai/dubai.component';
import { DsmComponent } from './dsm/dsm.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { LoginfomComponent } from './loginfom/loginfom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DubaiComponent,
    DsmComponent,
    EnquiriesComponent,
    LoginfomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
