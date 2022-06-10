import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './components/restaurant-detail/reviews/reviews.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'restaurant', component: RestaurantComponent },
  {
    path: "restaurant/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: 'menu', pathMatch: 'full' },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
