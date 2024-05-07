import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Table100Component } from './pages/table-100/table-100/table-100.component';
import { Table1000Component } from './pages/table-1000/table-1000/table-1000.component';
import { Table10000Component } from './pages/table-10000/table-10000/table-10000.component';
import { AdvancedTable100Component } from './pages/table-100/advanced-table-100/advanced-table-100.component';
import { AdvancedTable1000Component } from './pages/table-1000/advanced-table-1000/advanced-table-1000.component';
import { AdvancedTable10000Component } from './pages/table-10000/advanced-table-10000/advanced-table-10000.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'basic-table-100', component: Table100Component },
  { path: 'basic-table-1000', component: Table1000Component },
  { path: 'basic-table-10000', component: Table10000Component },
  { path: 'advanced-table-100', component: AdvancedTable100Component },
  { path: 'advanced-table-1000', component: AdvancedTable1000Component },
  { path: 'advanced-table-10000', component: AdvancedTable10000Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
