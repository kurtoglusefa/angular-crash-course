import {Component, OnInit} from '@angular/core';
import {ProductRepresentation} from '../services/api/models/product-representation';
import {ProductService} from '../services/api/products/product.service';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-products',
  imports: [
    ProductDetailsComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: ProductRepresentation[] = [];

  constructor(private service: ProductService) {

  }

  ngOnInit() {
    this.service.getAllProductsWithLimit()
        .subscribe({
          next: (result) => {
           this.products = result;
          },
        });
  }

  // ngOnInit() {
  //   const product: ProductRepresentation = {
  //     title: 'My product',
  //     description: 'Product description',
  //     price: 12,
  //     category: 'Any',
  //     image: 'https://some-image.jpg',
  //   }
  //   this.service.createProduct(product)
  //     .subscribe({
  //       next: (result) => {
  //         console.log(result);
  //       },
  //       error: (error: HttpErrorResponse) => {
  //         console.log(error);
  //         if(error.error instanceof ErrorEvent){
  //           console.error('An error occurred:', error.error.message);
  //         }
  //         else{
  //           //server side error
  //           console.error(`Backend returned code ${error.status}, error message: ${error.message}`);
  //         }
  //       }
  //     });
  // }

}
