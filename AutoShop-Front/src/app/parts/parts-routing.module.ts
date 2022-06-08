import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPartsComponent } from './components/index-parts/index-parts.component';
import { ShowPartsComponent } from './components/show-parts/show-parts.component';

const routes: Routes = [{
  path: '',
  component: IndexPartsComponent,
  pathMatch: 'full',
},
{
  path: ':id',
  component: ShowPartsComponent,
  pathMatch: 'full',
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsRoutingModule { }
