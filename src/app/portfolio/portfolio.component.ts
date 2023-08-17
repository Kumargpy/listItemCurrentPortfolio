import { Component, Input } from '@angular/core';
import { PORTFOLIO } from './mock-portfolio';
import { Portfolio } from './portfolio';
import { DataService } from '../data.service';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  @Input() portfolio: any;
 
  iconData: any;  
  selectedPortfolio?: Portfolio;
  
  constructor(private dataService: DataService) {}
  onSelect(portfolio: Portfolio): void {
    this.selectedPortfolio = portfolio;
  }
  ngOnInit() {
    // this.dataService.getIconData().subscribe(data => {
    //   this.iconData = data;
    // });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/