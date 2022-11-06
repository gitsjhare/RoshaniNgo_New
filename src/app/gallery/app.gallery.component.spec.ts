import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery } from './app.gallery.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';

describe('GalleryComponent', async() => {
  let component: Gallery;
  let fixture: ComponentFixture<Gallery>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Gallery],
      imports:[Angular2ImageGalleryModule]
    })
    .compileComponents().then(async()=>{
      fixture=TestBed.createComponent(Gallery);
      component=fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be H1 Component', async(() => {
    let compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual('Gallery-Activity Photographs');
  }));
});
