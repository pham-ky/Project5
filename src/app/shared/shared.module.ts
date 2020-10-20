import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
  
})
export class SharedModule { }
