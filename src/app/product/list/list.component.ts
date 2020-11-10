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
export class ListComponent extends BaseComponent implements OnInit {

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute,
    private injector: Injector) {
    super(injector);
  }
  title = 'Danh sách sản phẩm';
  list: any;
  products: any;
  categories: any;
  suppliers: any;
  page: any;
  pageSize: any;
  totalItems: any;
  item_group_id: any;
  textkey: string = '';
  ngOnInit(): void {

    this.list = [];
    this.page = 1;
    this.pageSize = 6;

    this._route.params.subscribe(params => {
      this.item_group_id = params['id'];
      this.productService.post('/GetProducts', { page: this.page, pageSize: this.pageSize, item_group_id: this.item_group_id, textkey: this.textkey })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;
        }, err => { });
    });

    this.categoryService
      .Get()
      .pipe(first())
      .subscribe((categories) => {
        this.categories = categories;
      });

    this.supplierService
      .GetSup()
      .pipe(first())
      .subscribe((suppliers) => {
        this.suppliers = suppliers;
      });
  }

  loadPage(page) {
    console.log(this.textkey);

    this._route.params.subscribe(params => {
      let id = params['id'];
      this.productService.post('/GetProducts', { page: this.page, pageSize: this.pageSize, item_group_id: this.item_group_id, textkey: this.textkey }).subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
      }, err => { });
    });
  }


  addToCart(it) {
    this._cart.addToCart(it);
    alertify.success('Thêm thành công!');
  }

}
