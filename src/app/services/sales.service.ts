import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  URL ="http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getSales(): Observable<any>{
    const url = this.URL + `venta`;
    return this.http.get(url);
  }

  deleteSale(id:number):Observable<any>{
    const url = this.URL + `venta/${id}`;
    console.log("finalizo service")
    return this.http.delete(url);
    
  }
}
