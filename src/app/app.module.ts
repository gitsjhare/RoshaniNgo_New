import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';
import { HomeComponent } from './home/app.homecomponent';
import {HeaderComponent} from './shared/Header/app.header.component';
import {FooterComponent} from './shared/Footer/app.footer.component';
import{routing} from './app.routes';
import {AboutRoshani} from './about/app.about.component';
import {Gallery} from './gallery/app.gallery.component';
import {Press} from './pressrelease/app.press.component';
import {Organization} from './organization/app.organization.Component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutRoshani,
    Gallery,
    Press,
    Organization
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    Angular2ImageGalleryModule,
    HttpClientModule,
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  app=new HomeComponent().Images();

 }

