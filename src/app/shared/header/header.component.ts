import { Component, Injector, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CategoryService } from '../../lib/category.service';
import { SupplierService } from '../../lib/supplier.service';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/lib/base-component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {

  constructor(private categoryService: CategoryService,
    private supplierService: SupplierService,
    injector: Injector) 
  {
      super(injector);
  }
  categories: any;
  suppliers: any;
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
  }

}
