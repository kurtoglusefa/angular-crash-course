import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/api/products/product.service';
import {ProductRepresentation} from '../services/api/models/product-representation';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  // constructor(private activatedRoute: ActivatedRoute) {
  // }
  // param: any;
  // queryParam: any;
  //
  // ngOnInit(): void {
  //   console.log(this.activatedRoute);
  //   this.param=this.activatedRoute.snapshot.params['username'];
  //   this.queryParam=this.activatedRoute.snapshot.queryParams['course'];
  //   }

}
