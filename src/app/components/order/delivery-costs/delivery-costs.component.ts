import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.scss']
})
export class DeliveryCostsComponent implements OnInit {
  @Input() delivery: number;
  @Input() itemsValue: number;



  constructor() { }

  ngOnInit(): void {
  }

  total(): number {
    return this.delivery + this.itemsValue;
  }


}
