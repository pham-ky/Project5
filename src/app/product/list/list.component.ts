import { Component, Injector, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductService } from '../../lib/product.service';
import { CategoryService } from '../../lib/category.service';
import { SupplierService } from '../../lib/supplier.service';
import { BaseComponent } from 'src/app/lib/base-component';
import { ActivatedRoute } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { first, map, switchMap } from 'rxjs/operators';

declare let alertify: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends BaseComponent  implements OnInit {

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute,
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
    // this.productService
    //   .GetProd()
    //   .pipe(first())
    //   .subscribe((products) =>{
    //     // console.log(products);
    //     // this.page=1;
    //     // this.pageSize=6;
    //     this.products =products;
    //     // if(Object.keys(products).length%this.pageSize!=0)
    //     //   this.totalItems =Math.floor(Object.keys(products).length/this.pageSize)+1;
    //     // else
    //     //   this.totalItems = Object.keys(products).length/this.pageSize;
    //     // var skip = (this.totalItems-1)*this.pageSize;
    //     // this.products.find({})
    //     // .skip(skip)
    //     // .limit(this.pageSize)
    //     // .then(products=>{
    //     //   this.products=products;
    //     // });
    //     // console.log(this.totalItems);
    // });

    this.activatedRoute.paramMap
    .pipe(
      map((params)=>params.get('id')),
      switchMap((id)=>this.productService.GetProdBy(id))
    )
    .subscribe((products)=>{
      this.products = products;

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

  addToCart(it) { 
    this._cart.addToCart(it);
    alertify.success('Thêm thành công!'); 
  }

}
