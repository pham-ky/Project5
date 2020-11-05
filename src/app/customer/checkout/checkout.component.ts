import { BaseComponent } from '../../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CheckoutService } from '../../lib/checkout.service';
import { UserService } from '../../lib/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {

  user: any;
  fullname: string;
  address: string;
  phone: string;
  note: string;

  items:any;
  totalQty: any;
  totalMoney: any;
  constructor(injector: Injector,
    private router: Router,
    private checkoutService: CheckoutService,
    private _user: UserService,
    ) {
    super(injector);
   }
  title = 'Thanh toán';
  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.totalQty = 0;
      this.totalMoney = 0;
      for(let x of this.items){ 
        x.money = x.quantity * x.productPrice;
        
        this.totalQty += Number.parseInt(x.quantity);
        
        this.totalMoney+=Number.parseInt(x.money);
      } 
    });
    
    this._user.user$.subscribe((res)=> {
      this.user = res;
      
    })

    this.fullname = this.user.userFullName;
    this.address = this.user.userAddress;
    this.phone = this.user.userPhone;

  }

  checkout(): void {
    var order = {
      orderName: this.fullname,
      orderAddress: this.address,
      orderPhone: this.phone,
      orderNote: this.note,
      totalMoney: this.totalMoney,
      orderDetails: JSON.stringify(this.items),
    };
    this.checkoutService
      .checkout(order)
      .pipe(first())
      .subscribe((res) => {
        console.log(res);
        if (res > 0) {
          this._cart.clearCart();
          // this.messageService.add({
          //   severity: 'success',
          //   summary: 'Thông báo',
          //   detail: 'Đặt hàng thành công',
          // });
          setTimeout(() => {
            this.router.navigateByUrl('/home');
          }, 800);
        }
      });
  }

}
