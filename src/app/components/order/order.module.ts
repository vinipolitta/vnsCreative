import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrderComponent, OrderItensComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,

    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
})
export class OrderModule {}
