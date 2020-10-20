import { Component, Injector, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductService } from '../../lib/product.service';
import { CategoryService } from '../../lib/category.service';
import { SupplierService } from '../../lib/supplier.service';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent  implements OnInit {

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private  injector: Injector)
    { 
      super(injector);
  }
  title = 'Danh sách sản phẩm';
  products: any;
  categories:any;
  suppliers: any;
  page: any;
  pageSize: any;
  totalItems:any;
  item_group_id:any;
  ngOnInit(): void {
    this.productService
      .GetProd()
      .pipe(first())
      .subscribe((products) =>{
        // console.log(products);
        this.products =products;
    });
    this.categoryService
      .Get()
      .pipe(first())
      .subscribe((categories) =>{
        // console.log(categories);
        this.categories =categories;
    });
    this.supplierService
      .GetSup()
      .pipe(first())
      .subscribe((suppliers) =>{
        // console.log(suppliers);
        this.suppliers =suppliers;
    });
  }

}
