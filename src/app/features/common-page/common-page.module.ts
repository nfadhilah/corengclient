import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPageRoutingModule } from './common-page-routing.module';
import { CommonPageComponent } from './common-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonPageResolver } from './common-page.resolver';
import { CommonPageDetailComponent } from './common-page-detail/common-page-detail.component';
import { CommonPageHomeComponent } from './common-page-home/common-page-home.component';

@NgModule({
  declarations: [CommonPageComponent, CommonPageDetailComponent, CommonPageHomeComponent],
  imports: [CommonModule, CommonPageRoutingModule, SharedModule],
  providers: [CommonPageResolver],
})
export class CommonPageModule {}
