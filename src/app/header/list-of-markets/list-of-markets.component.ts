import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-list-of-markets',
  templateUrl: './list-of-markets.component.html',
  styleUrls: ['./list-of-markets.component.css']
})
export class ListOfMarketsComponent implements OnInit {
  @Output() changeBalance: EventEmitter<any> = new EventEmitter();
  public marketsList;
  public listOfpurchasedShares;
  constructor(private _data: DataService) {}
  buyStocks(amount, market) {
    const amountIsNumber = parseInt(amount);
    const fullPrice = amountIsNumber * market.price;
    if (amountIsNumber && (this._data.getUserBalance()) >= fullPrice) {
      const index = this.listOfpurchasedShares.indexOf(market);
      const _market = market;
      if (!(index === -1)) {
        this.listOfpurchasedShares[index].amount += +amountIsNumber;
        this.changeBalance.emit(fullPrice);
      } else {
        _market.amount = +amountIsNumber;
        this._data.setPurchasedShares(_market);
        console.log(fullPrice);
        this.changeBalance.emit(fullPrice);
        console.log(this._data.getPurchasedShares());
      }
    }
    this._data.updateTotalPrice();
  }
  ngOnInit() {
    this.marketsList = this._data.getMarketsList();
    this.listOfpurchasedShares = this._data.getPurchasedShares();
  }

}
