import { Component, OnInit ,DoCheck} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  
  public sliderValue = 5;
  public switchValue = false;
  public min = 0;
  public max = 10;
  public smallStep = 1;
  public inputVal;

  onClick() {   
   alert("switch value is " + this.switchValue);
  }
  constructor() { 
    
  }
  ngOnInit() {

  }

}
