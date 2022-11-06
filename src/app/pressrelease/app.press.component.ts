import { Component,OnInit } from '@angular/core';
import {GetJsonDataService} from '../service/get-json-data.service';



@Component({
    selector: 'Roshani-Press',
    templateUrl: './app.press.component.html',
    styleUrls: ['./app.press.component.scss'],
    providers:[GetJsonDataService]
})


// tslint:disable-next-line:component-class-suffix
export class Press implements OnInit {
    public Years: any;
    public YearlyUrl: any;
    public GallaryArray:any[]=[];
    public Gallery:any;
    constructor(private jsondata:GetJsonDataService) {
    }
    ngOnInit(): void {

     this.jsondata.GetJsonFromFile("/assets/data/PressNews.json").subscribe(
      {
        next : (v)=>this.Years=v,
        error : (e) => console.log(e),
        complete: () => console.log("Load Complete")
      }
     );
    }
}
