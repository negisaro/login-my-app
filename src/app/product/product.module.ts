import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { LayoutProductComponent } from './layouts/layout-product/layout-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';

@NgModule({
  declarations: [
    AddProductComponent,
    LayoutProductComponent,
    ListProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
  ]
})
export class ProductModule { }
