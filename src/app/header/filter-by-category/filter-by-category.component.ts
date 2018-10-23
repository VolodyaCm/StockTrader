import { Component, OnInit} from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-filter-by-category',
  templateUrl: './filter-by-category.component.html',
  styleUrls: ['./filter-by-category.component.css']
})
export class FilterByCategoryComponent implements OnInit {
  public categoryList;
  public option = 0;
  public marketsList;
  public copyMarketsList;
  constructor(private _data: DataService) {}
  public selected = 'all markets';
  updateMarketsList() {
    this.marketsList.length = 0;
    this.copyMarketsList.forEach(el => {
      this.marketsList.push(el);
    });
  }
  message() {
    console.log(this.selected);
    this.updateMarketsList();
    console.log(this.selected);
    if (this.selected === 'all markets') {
      this.updateMarketsList();
      console.log(this.marketsList);
    } else {
      const data = [];
      this.marketsList.forEach(el => {
        if (el.category !== this.selected) {
          data.push(el);
        }
      });
      data.forEach(el => {
        this.marketsList.splice(this.marketsList.indexOf(el), 1);
      });
    }
  }

  ngOnInit() {
    this.categoryList = this._data.loadCategoryList();
    this.marketsList = this._data.getMarketsList();
    this.copyMarketsList = this._data.getCopyMarketsList();
  }

}
