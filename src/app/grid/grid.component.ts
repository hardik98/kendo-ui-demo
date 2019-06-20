import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { sampleProducts } from '../products';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  public gridData: any[] = sampleProducts;
  pageSize:number = 5;

  constructor() { }

  ngOnInit() {
  }

}
