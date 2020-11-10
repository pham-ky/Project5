import { BaseComponent } from '../../lib/base-component';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let alertify: any;
@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent extends BaseComponent implements OnInit {

  title = 'Giỏ hàng';
  items:any;
  // total:any;
  totalQty: any;
  totalMoney: any;
  constructor(private router:Router,
    injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.items = res;
      // this.total = 0;
      this.totalQty = 0;
      this.totalMoney = 0;
      for(let x of this.items){ 
        x.money = x.quantity * x.productPrice;
        
        // this.total += x.quantity * x.productPrice;
        this.totalQty += Number.parseInt(x.quantity);
        
        this.totalMoney+=Number.parseInt(x.money);
      } 
    });
  } 
  clearCart() { 
    this._cart.clearCart();
    alertify.success('Xóa thành công');
  }
  addQty(item, quantity){ 
    item.quantity =  quantity;
    item.money =  Number.parseInt(item.quantity) *  item.productPrice;
    this._cart.addQty(item);
  }
  clearItemCart(id){
    this._cart.deleteItem(id);
    alertify.success('Xóa thành công');
  }

}
