import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { CommonPageComponent } from './common-page.component';


@NgModule({
  declarations: [CommonPageComponent],
  imports: [
    CommonModule,
    CommonPageRoutingModule
  ]
})
export class CommonPageModule { }
