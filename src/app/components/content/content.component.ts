import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SalesService } from 'src/app/services/sales.service';
import { Client, Product, Sale } from 'src/types/types';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Output() updatePage = new EventEmitter<any>();
  @Input() clientsList: Client[]=[];
  @Input() productsList: Product[]=[];
  @Input() salesList: Sale[]=[];
  @Input() itemActive:string="client";
  closeResult = '';
  informationDelete:string="";

  clientSelect:Client=this.clientsList[0];
  productSelect:Product=this.productsList[0];
  saleSelect:Sale=this.salesList[0];

  constructor(
    private modalService:NgbModal,
    private _apiSales:SalesService
    ) { 
  }

  ngOnInit(): void {
  }

  update(id:number){
    console.log("update")
  }

  delete(id:number){
    this._apiSales.deleteSale(id).subscribe(result=>{
      console.log(result);
    });
    this.modalService.dismissAll();
    setTimeout(()=>{this.updatePage.emit(this.itemActive);},100)
    
    console.log("finalizo content")
  }

  open(content:any,i:number) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);

    
    switch(this.itemActive){
      case "client":
        this.clientSelect=this.clientsList[i];
        break;
      case "product":
        this.productSelect=this.productsList[i];
        break;
      case "sale":
        this.saleSelect=this.salesList[i];
        break;
    }

    this.informationDelete+="Hola";
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
