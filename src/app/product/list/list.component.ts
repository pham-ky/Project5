import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit {

  constructor() { 
  }
  title = 'Danh sách sản phẩm';

  ngOnInit(): void {
  }

}
