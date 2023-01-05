import { Component } from '@angular/core';


@Component({
  selector: 'Roshani-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements ForImages {
  title!: string;
  RoshaniNgo!: string;
  Achivement_1!: string;
  Achivement_1_Detail!: string;
  Achivement_2!: string;
  Achivement_2_Detail!: string;
  Achivement_3!: string;
  Achivement_3_Detail!: string;
   Images(): string[] {
    let ImgArray: string[]=[];
   return ImgArray;
  }
  ngOnInit():void{
    this.title = 'Roshani';
    this.RoshaniNgo = 'Roshani Ngo';

    this.Achivement_1 = "BEST ORGANISATION AWARD, TO DISTRICT LEVEL AWARD";
    this.Achivement_1_Detail = " At the end of National Youth week, the organization ware awarded by the Nehru Youth Centre Betul at 22nd jan. 2007 as a Best District level organization for Best Social work in the District area for the year 2007-2008";

    this.Achivement_2 = "BEST ORGANISATION ‘A’ GRADE TO DISTRICT LEVEL AWARD";
    this.Achivement_2_Detail = 'At the end of national youth week on 22nd jan 2009, Roshani has been awarded with District level ‘A’ grade Mandal  award by NYK under which constellation amount certificate was given to the Roshani';

    this.Achivement_3 = 'Awarded GAUTAM BUDH STATE prize by Govt. of (M.P.)';
    this.Achivement_3_Detail = 'The Gautam Budh Award 2007, awarded for Social Enlightenment role in village development and the suffering person’s benefit at 26th jan  2011 with presence of Hon\'ble M.L.A and M.P. at Lal Pared Ground Betul';

  }
}
 interface ForImages{
  Images(): Array<string>;
  title: string;
  RoshaniNgo: string;

  Achivement_1: string;
  Achivement_1_Detail: string;

  Achivement_2: string;
  Achivement_2_Detail: string;

  Achivement_3: string;
  Achivement_3_Detail: string;

}
