import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../lib/base-component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor(injector: Injector) {
    super(injector);
   }
   
  ngAfterViewInit() { 
    this.loadScripts();
  }
  title = 'Trang chủ';
  ngOnInit(): void {
  }

}
