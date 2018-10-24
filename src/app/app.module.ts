import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListOfMarketsComponent } from './header/list-of-markets/list-of-markets.component';
import { UserPortfolioComponent } from './header/user-portfolio/user-portfolio.component';
import { UserBalanceComponent } from './header/user-balance/user-balance.component';
import { DataService } from './data.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FilterByCategoryComponent } from './header/filter-by-category/filter-by-category.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOfMarketsComponent,
    UserPortfolioComponent,
    UserBalanceComponent,
    FilterByCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
