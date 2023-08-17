import { Component } from '@angular/core';
import { PORTFOLIO } from './portfolio/mock-portfolio';
import { PORTFOLIO2 } from './portfolio/mock-portfolio';
import { Portfolio } from './portfolio/portfolio';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Current Portfolio';
  iconData: any;
  portfolio = PORTFOLIO;
  portfolio2 = PORTFOLIO2;
  selectedPortfolio?: Portfolio;
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/