import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { CommonPageComponent } from './common-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CommonPageComponent],
  imports: [CommonModule, CommonPageRoutingModule, SharedModule],
})
export class CommonPageModule {}
