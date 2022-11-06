import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {routing} from './app.routes';
import {HeaderComponent} from './shared/Header/app.header.component';
import {FooterComponent} from './shared/Footer/app.footer.component';
import {HomeComponent} from './home/app.homecomponent';
import {AboutRoshani} from './about/app.about.component';
import {Gallery} from './gallery/app.gallery.component';
import {Press} from './pressrelease/app.press.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import {APP_BASE_HREF} from '@angular/common';

describe('App Component', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,HeaderComponent,FooterComponent,HomeComponent,AboutRoshani,
        Gallery,
        Press
      ],
      imports:[routing,Angular2ImageGalleryModule],
      providers:[{provide:APP_BASE_HREF,useValue:'/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should equal',async()=>{
    expect(component.title).toEqual("Roshani");
  });

  it('should be equal',async()=>{
    expect(component.RoshaniNgo).toEqual("Roshani Ngo");
  });
});
