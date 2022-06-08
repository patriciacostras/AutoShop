import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IPart } from '../../models/part';
import { PartsService } from '../../services/parts.service';

@Component({
  selector: 'app-show-parts',
  templateUrl: './show-parts.component.html',
  styleUrls: ['./show-parts.component.scss']
})
export class ShowPartsComponent implements OnInit {

  constructor(private partService: PartsService,private route: ActivatedRoute) { }
  part: IPart | undefined;
  ngOnInit(): void {
    this.getPart();
  }
  getPart(){
    const id=this.route.snapshot.params['id'];
    this.partService.getPart(this.route.snapshot.params['id']).subscribe(
    response=>this.part=response
  )
}
}