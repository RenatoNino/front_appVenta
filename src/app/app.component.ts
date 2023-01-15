import { Component } from '@angular/core';
import { Client, Product, Sale } from 'src/types/types';
import { ClientsService } from './services/clients.service';
import { ProductsService } from './services/products.service';
import { SalesService } from './services/sales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appVenta';
  clientsList: Client[] = [];
  productsList: Product[] = [];
  salesList: Sale[] = [];
  loading: boolean = false;
  itemActive: string = "";
  constructor(
    private _apiClients: ClientsService,
    private _apiProducts: ProductsService,
    private _apiSales: SalesService
  ) { }

  findClients(): void {
    this.clientsList = [];
    this.loading = true;

    this._apiClients.getClients().subscribe(result => {
      console.log(result);
      this.clientsList = result;
      this.loading = false;
    })
  }

  findProducts(){
    this.productsList=[];
    this.loading=true;

    this._apiProducts.getProducts().subscribe(result=>{
      console.log(result);
      this.productsList=result;
      this.loading=false;
    })
  }

  findSales(){
    this.salesList=[];
    this.loading=true;

    this._apiSales.getSales().subscribe(result=>{
      console.log(result);
      this.salesList=result;
      this.loading=false;
    })
  }

  updatePage(itemActive: string): void {
    this.itemActive=itemActive;
    switch (itemActive) {
      case "client":
        this.findClients();
        break;
      case "product":
        this.findProducts();
        break;
      case "sale":
        this.findSales();
        break;
    }
    console.log("Item activo"+itemActive);
  }
}
