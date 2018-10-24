import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-user-balance',
  templateUrl: './user-balance.component.html',
  styleUrls: ['./user-balance.component.css'],
  exportAs: 'user-balance'
})
export class UserBalanceComponent implements OnInit {

  @Input() userBalance;

  constructor() {}

  ngOnInit() {
  }

}
