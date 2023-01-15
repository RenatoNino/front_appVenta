import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemActive:string = "client";
  @Output() itemSelect = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.itemSelect.emit(this.itemActive);
  }

  clickClient(){
    this.itemActive="client";
    this.itemSelect.emit(this.itemActive);
  }

  clickProduct(){
    this.itemActive="product";
    this.itemSelect.emit(this.itemActive);
  }

  clickSale(){
    this.itemActive="sale";
    this.itemSelect.emit(this.itemActive);
  }

}
