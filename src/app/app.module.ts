import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {​​​ MatListModule }​​​ from '@angular/material/list';
import { AusbildungComponent } from './ausbildung/ausbildung.component';
import { StudiumComponent } from './studium/studium.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KevinsComponentComponent } from './kevins-component/kevins-component.component';







@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AusbildungComponent,
    StudiumComponent,
    KontaktComponent,
    KevinsComponentComponent,
  
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };

