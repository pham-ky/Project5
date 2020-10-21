import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../lib/product.service'
import { first, map, switchMap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    injector: Injector) {
    super(injector);
   }
   
  ngAfterViewInit() { 
    this.loadScripts();
  }
  product: any;
  title= 'Chi tiết sản phẩm';
  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        // first(),
        map((params) => params.get('id')),
        switchMap((id) => this.productService.GetId(id))
      )
      .subscribe((product) => {
        this.product = product;
        console.log(this.product);
      });  
  }
  
  
}