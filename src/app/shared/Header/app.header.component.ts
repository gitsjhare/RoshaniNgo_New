import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'Header-Roshani',  
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.scss']
})
export class HeaderComponent {
  Roshani='Roshani';
  RoshaniSubTitle='Rational Organization For Social Hygienic Awareness & National Integrity';
}
