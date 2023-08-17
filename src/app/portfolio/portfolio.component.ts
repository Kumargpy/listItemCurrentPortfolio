import { Component } from '@angular/core';
import {  Portfolio } from '../portfolio';
import {  PORTFOLIO } from '../mock-portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {

  portfolio = PORTFOLIO;
  selectedPortfolio?: Portfolio;

  onSelect(portfolio: Portfolio): void {
    this.selectedPortfolio = portfolio;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/