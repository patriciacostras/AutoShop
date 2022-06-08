import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICar } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.scss']
})
export class ShowCarComponent implements OnInit {

  car: ICar | undefined;

  constructor(private route: ActivatedRoute,private carService: CarService) { }

  ngOnInit(): void {
    this.getCar();
  }

getCar(){
  const id=this.route.snapshot.params['id'];
  this.carService.getCar(this.route.snapshot.params['id']).subscribe(
  response=>this.car=response
)
}
}
