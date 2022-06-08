import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { ICar } from '../../models/car';
import { CarService } from '../../services/car.service';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';

@Component({
  selector: 'app-index-cars',
  templateUrl: './index-cars.component.html',
  styleUrls: ['./index-cars.component.scss']
})
export class IndexCarsComponent implements OnInit {
  cars: ICar[] = [];
  rowData: ICar[] = [];

  columnDefs: ColDef[] = [
    { field: 'idCar', flex: 1, filter: true, sortable: true, onCellClicked: (event: CellClickedEvent) => this.showCar(event.data) },
    { field: 'brand', flex: 1, filter: true },
    { field: 'model', flex: 1},
    { field: 'productionYear', flex: 1 },
    { field: 'stock', flex: 1},
    { 
      field: 'delete',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: (car: any) => {
          this.deleteCar(car);
        }
      }
    }
  ];

  frameworkComponents = {
    btnCellRenderer: BtnCellRendererComponent
  };

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(
      res => { 
        this.cars = res;
        this.rowData = [...this.cars];
      }
    );
  }

  createCar() {
    const car: ICar = {
      idCar : 1,
      brand: 'BMW',
      model: 'x3',
      productionYear: 2022,
      stock: 3
    };

    this.carService.createCar(car).subscribe(
      res => { 
        this.cars?.push(res);
        this.rowData = [...this.cars];
      }
    );
  }

  deleteCar(car: ICar) {
    this.carService.deleteCar(car.idCar).subscribe(
      res => {
        const carIndex = this.cars.indexOf(car);
        this.cars.splice(carIndex, 1);
        this.rowData = [...this.cars];
      }
    )
  }

  showCar(car: ICar) {
    this.router.navigate([`/cars/${car.idCar}`]);
  }

  onRowClicked(event: any) {
    this.showCar(event.data);
  }

}
