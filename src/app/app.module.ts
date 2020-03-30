import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TeximateModule } from 'ngx-teximate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/main/topnav/topnav.component';
import { LandingComponent } from './components/pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeximateModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
