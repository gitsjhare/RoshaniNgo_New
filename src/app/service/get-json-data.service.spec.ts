import { TestBed, inject, ComponentFixture,async } from '@angular/core/testing';
import { GetJsonDataService } from './get-json-data.service';
import {Http,HttpModule} from '@angular/http';

describe('GetJsonDataService', () => {
  let component: GetJsonDataService;
  let fixture: ComponentFixture<GetJsonDataService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJsonDataService],
      imports:[HttpModule]
    }).compileComponents().then(async()=>{
      fixture=TestBed.createComponent(GetJsonDataService);
      component=fixture.componentInstance;
      fixture.detectChanges();
    }); 
  });

  it('should be created', inject([GetJsonDataService], (service: GetJsonDataService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should send request',(done)=>{
    done();
  });

  it('should have jsonData',async(()=>{
    expect(component.GetJsonFromFile).toBe('');
  }));
});
