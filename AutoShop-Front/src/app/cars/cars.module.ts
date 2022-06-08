import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { IndexCarsComponent } from './components/index-cars/index-cars.component';
import { ShowCarComponent } from './components/show-car/show-car.component';
import { AgGridAngular, AgGridColumn, AgGridModule } from 'ag-grid-angular';
import { BtnCellRendererComponent } from './components/btn-cell-renderer/btn-cell-renderer.component';

@NgModule({
  declarations: [
    IndexCarsComponent,
    ShowCarComponent,
    BtnCellRendererComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    AgGridModule.withComponents([BtnCellRendererComponent])
  ],
  exports: [
    BtnCellRendererComponent
  ]
})
export class CarsModule { }
