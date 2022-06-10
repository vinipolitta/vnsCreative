import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantTableComponent } from './components/restaurant/restaurant-table/restaurant-table.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './components/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurant-detail/reviews/reviews.component';
import { ShoppingCardComponent } from './components/restaurant-detail/shopping-card/shopping-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent,
    RestaurantTableComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
    ShoppingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    NgbModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
