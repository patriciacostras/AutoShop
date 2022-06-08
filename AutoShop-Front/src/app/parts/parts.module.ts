import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsRoutingModule } from './parts-routing.module';
import { ShowPartsComponent } from './components/show-parts/show-parts.component';
import { IndexPartsComponent } from './components/index-parts/index-parts.component';
import { AgGridModule } from 'ag-grid-angular';
import { BtnCellRendererComponent } from './components/btn-cell-renderer/btn-cell-renderer.component';




@NgModule({
  declarations: [
    ShowPartsComponent,
    IndexPartsComponent,
  ],
  imports: [
    CommonModule,
    PartsRoutingModule,
    AgGridModule.withComponents([BtnCellRendererComponent])
  ]
})
export class PartsModule { }
