import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { PartsService } from 'src/app/parts/services/parts.service';
import { IPart } from '../../models/part';
import { BtnCellRendererComponent } from '../btn-cell-renderer/btn-cell-renderer.component';

@Component({
  selector: 'app-index-parts',
  templateUrl: './index-parts.component.html',
  styleUrls: ['./index-parts.component.scss']
})
export class IndexPartsComponent implements OnInit {

  parts: IPart[]=[];
  rowData: IPart[] = [];

  columnDefs: ColDef[] = [
    { field: 'idComponent', flex: 1, filter: true, sortable: true, onCellClicked: (event: CellClickedEvent) => this.showPart(event.data) },
    { field: 'name', flex: 1, filter: true },
    { field: 'price', flex: 1},
    { field: 'stock', flex: 1},
    { 
      field: 'delete',
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: (part: any) => {
          this.deletePart(part);
        }
      }
    }
  ];

  frameworkComponents = {
    btnCellRenderer: BtnCellRendererComponent
  };
  constructor(private partService: PartsService, private router: Router){}
  ngOnInit(): void {
    this.partService.getParts().subscribe(
      res => { 
        this.parts = res;
        this.rowData = [...this.parts];
      }
    );
  }

  createPart(){
    const part: IPart={
      idComponent:1,
      name:'motor',
      price:50,
      stock:3
    };
    this.partService.createPart(part).subscribe(
      res => { 
        this.parts?.push(res);
        this.rowData = [...this.parts];
      }
    );
  }

deletePart(part:IPart){
  this.partService.deletePart(part.idComponent).subscribe(
   res=> {const partIndex=this.parts.indexOf(part);
    this.parts?.splice(partIndex,1);
    this.rowData = [...this.parts];
   });
}

showPart(part: IPart) {
  this.router.navigate([`/parts/${part.idComponent}`]);
}

onRowClicked(event: any) {
  this.showPart(event.data);
}

}



