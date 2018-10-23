import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { DataService } from '../../data.service';
import { parse } from 'url';


@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent implements OnInit {
  @Output() changeBalance: EventEmitter<any> = new EventEmitter();
  @Input() totalPrice;
  public listOfpurchasedShares;
  constructor(private _data: DataService) { }
  public sellStocks(amount, market) {
    const amountIsNumber = parseInt(amount);
    const fullPrice = amountIsNumber * market.price;
    console.log(fullPrice);
    if (amountIsNumber && amountIsNumber <= market.amount) {
      market.amount = market.amount - amountIsNumber;
      this.changeBalance.emit(fullPrice);
      this._data.updateTotalPrice();
      this.totalPrice = this._data.getTotalPrice();
    }
    if (market.amount === 0) {
      this.listOfpurchasedShares.splice(this.listOfpurchasedShares.indexOf(market), 1);
    }
  }
  ngOnInit() {
    this.listOfpurchasedShares = this._data.getPurchasedShares();
  }

}
