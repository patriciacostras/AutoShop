import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCarsComponent } from './components/index-cars/index-cars.component';
import { ShowCarComponent } from './components/show-car/show-car.component';

const routes: Routes = [
  {
    path:'',
    component: IndexCarsComponent,
    pathMatch:'full',
  },
  {
    path:':id',
    component: ShowCarComponent,
    pathMatch:'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
