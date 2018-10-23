import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalPrice = 0;
  public userBalance = 10000;
  public marketsStatus = true;
  public portfolioStatus = false;
  constructor(private _data: DataService) { }
  changeStatus(value) {
    if (this.marketsStatus && value !== 'Markets') {
      this.marketsStatus = false;
      this.portfolioStatus = true;
    } else if (this.portfolioStatus && value !== 'Portfolio') {
      this.marketsStatus = true;
      this.portfolioStatus = false;
    }
  }
  chB(value) {
    this._data.reduceThebalance(value);
    this.userBalance = this._data.getUserBalance();
    this._data.updateTotalPrice();
    this.totalPrice = this._data.getTotalPrice();
  }
  chB2(value) {
    this._data.increaseBalance(value);
    this.userBalance = this._data.getUserBalance();
  }
  ngOnInit() {
  }

}
