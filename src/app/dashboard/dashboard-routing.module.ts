import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AddProductComponent } from '../product/pages/add-product/add-product.component';
import { ListProductComponent } from '../product/pages/list-product/list-product.component';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'product',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('../product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'user',
        canActivate: [isAuthenticatedGuard],
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'list-product'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
