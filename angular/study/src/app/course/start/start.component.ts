import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnChanges {

  @Input()
  rating:number = 0;

  startWidth!: number;

  ngOnChanges(): void {
    this.startWidth = this.rating * 74 / 5;
  }
  
  

}
