import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'cars',
    loadChildren: () => import('./cars/cars.module').then((m)=> m.CarsModule),
  },

{
  path:'parts',
  loadChildren: () => import('./parts/parts.module').then((m)=> m.PartsModule),
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
