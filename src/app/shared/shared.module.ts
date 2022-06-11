import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { ManagerColorComponent } from './manager-color/manager-color.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    InputContainerComponent,
    RadioComponent,
    RatingComponent,
    ManagerColorComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

    CollapseModule.forRoot(),

    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    InputContainerComponent,
    CommonModule,
    SharedRoutingModule,
    RadioComponent,
    RatingComponent,
    ManagerColorComponent
  ],
})
export class SharedModule {}
