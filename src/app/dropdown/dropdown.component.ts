import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  public listItems :any[] = ['Chess','Hockey','Cricket','BasketBall','BaseBall','footBall'];
  public value: ['Chess','Hockey'];
  constructor() { }

  ngOnInit() {
  }

}
