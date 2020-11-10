import { Component, Injector, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CategoryService } from '../../lib/category.service';
import { SupplierService } from '../../lib/supplier.service';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';
import { UserService } from '../../lib/user.service';
import { Router } from '@angular/router';
declare let alertify: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  items: any;
  total: any;
  user: any;
  constructor(private categoryService: CategoryService,
    private supplierService: SupplierService,
    private _user: UserService,
    private router: Router,
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
        // console.log(this.totalQty);

        this.totalMoney += Number.parseInt(x.money);
      }
    });

    // this.user = window.localStorage.getItem("user");
    // console.log(this.user);
    

    // this.user = this._user.userValue;
    // console.log(this.user.userId);

    this._user.user$.subscribe((res)=> {
        this.user = res;
        
      })
    
  }
  clearItemCart(id) {
    this._cart.deleteItem(id);
    alertify.success('Xóa thành công');
  }
  logout(){
    this._user.logout();
    alertify.success("Đăng xuất thành công");
    setTimeout(() => {
      this.router.navigateByUrl('/customer/login');
    }, 1000);
  }
}
