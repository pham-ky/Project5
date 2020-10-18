import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor(injector: Injector) {
    super(injector);
   }
   
  ngAfterViewInit() { 
    this.loadScripts();
  }
  title= 'Chi tiết sản phẩm';
  ngOnInit() {  
  }
  
  
}