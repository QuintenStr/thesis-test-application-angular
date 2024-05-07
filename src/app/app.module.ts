import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import { AdvancedTableComponent } from './components/advanced-table/advanced-table.component';
import { HomeComponent } from './pages/home/home.component';
import { Table100Component } from './pages/table-100/table-100/table-100.component';
import { AdvancedTable100Component } from './pages/table-100/advanced-table-100/advanced-table-100.component';
import { Table1000Component } from './pages/table-1000/table-1000/table-1000.component';
import { AdvancedTable1000Component } from './pages/table-1000/advanced-table-1000/advanced-table-1000.component';
import { Table10000Component } from './pages/table-10000/table-10000/table-10000.component';
import { AdvancedTable10000Component } from './pages/table-10000/advanced-table-10000/advanced-table-10000.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { NgbdSortableHeader } from './services/sortable.directive';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    AdvancedTableComponent,
    HomeComponent,
    Table100Component,
    AdvancedTable100Component,
    Table1000Component,
    AdvancedTable1000Component,
    Table10000Component,
    AdvancedTable10000Component,
    NavbarComponent,
  ],
  providers: [PersonService, DecimalPipe, DatePipe],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AsyncPipe,
    NgbHighlight,
    NgbdSortableHeader,
    NgbPaginationModule,
    DecimalPipe,
    DatePipe,
  ],
})
export class AppModule {}
