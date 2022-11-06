import { Component } from '@angular/core';

@Component({
  selector: 'Roshani-Home',
  templateUrl: './app.homecomponent.html',
  styleUrls: ['./app.homecomponent.scss']
})
export class HomeComponent implements ForImages {
   Images(): string[] {
    let ImgArray=["../../assets/images/slide_1.jpg","../../assets/images/slide_2.jpg","../../assets/images/slide_3.jpg","../../assets/images/slide_4.jpg"];
   return ImgArray;
  }
  title:string='Roshani';
  RoshaniNgo:string='Roshani Ngo';

 
  Client:Array<string>=["../../assets/images/client_1.png","../../assets/images/client_2.png","../../assets/images/client_3.png","../../assets/images/client_4.png"];
}
 interface ForImages{
  Images():Array<string>;
}
