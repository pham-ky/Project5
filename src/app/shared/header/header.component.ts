import { Component, Injector, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CategoryService } from '../../lib/category.service';
import { SupplierService } from '../../lib/supplier.service';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';
declare let alertify: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  items: any;
  total: any;
  constructor(private categoryService: CategoryService,
    private supplierService: SupplierService,
    injector: Injector) {
    super(injector);
  }
  categories: any;
  suppliers: any;
  numb: any;
  totalQty = 0;
  totalMoney = 0;
  ngOnInit(): void {
    this.categoryService
      .Get()
      .pipe(first())
      .subscribe((categories) => {
        // console.log(categories);
        this.categories = categories;
      });

    this.supplierService
      .GetSup()
      .pipe(first())
      .subscribe((suppliers) => {
        // console.log(suppliers);
        this.suppliers = suppliers;
      });

    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;

      this.totalQty = 0;
      this.totalMoney = 0;
      for (let x of this.items) {
        x.money = x.quantity * x.productPrice;
        this.total += x.quantity * x.productPrice;
        this.totalQty += Number.parseInt(x.quantity);
        console.log(this.totalQty);

        this.totalMoney += Number.parseInt(x.money);
      }
    });

    // this._cart.numberOfItems()
    // ((numb)=>{
    //   this.numb = numb;
    // })
  }
  clearItemCart(id) {
    this._cart.deleteItem(id);
    alertify.success('Xóa thành công');
  }
}
