import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AusbildungComponent } from './ausbildung/ausbildung.component';
import { StudiumComponent } from './studium/studium.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KevinsComponentComponent } from './kevins-component/kevins-component.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { WindowsComponent } from './windows/windows.component';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from './about/about.component';
import { MainNavNewComponent } from './main-nav-new/main-nav-new.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BewerbungComponent } from './bewerbung/bewerbung.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PiechartFixComponent } from './piechart-fix/piechart-fix.component';
import { ChartsModule } from 'ng2-charts';
import { AusbildungWindowsComponent } from './ausbildung-windows/ausbildung-windows.component';
import { GeneralInfoCardComponent } from './general-info-card/general-info-card.component';
import { ContactCardsComponent } from './contact-cards/contact-cards.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input'




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AusbildungComponent,
    StudiumComponent,
    KontaktComponent,
    KevinsComponentComponent,
    FooterComponent,
    WindowsComponent,
    AboutComponent,
    MainNavNewComponent,
    BewerbungComponent,
    PiechartFixComponent,
    AusbildungWindowsComponent,
    GeneralInfoCardComponent,
    ContactCardsComponent,
    LoginComponent

  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    LayoutModule,
    ChartsModule,
    FlexLayoutModule,
    MatInputModule,

  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
