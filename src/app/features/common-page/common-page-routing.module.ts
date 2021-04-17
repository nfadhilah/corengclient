import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonPageComponent } from './common-page.component';
import { CommonPageResolver } from './common-page.resolver';
import { CommonPageDetailComponent } from './common-page-detail/common-page-detail.component';
import { CommonPageHomeComponent } from './common-page-home/common-page-home.component';

const routes: Routes = [
  {
    path: '',
    component: CommonPageComponent,
    children: [
      {
        path: ':id',
        component: CommonPageHomeComponent,
        resolve: [CommonPageResolver],
        data: { headerDisplay: 'none' },
      },
      {
        path: ':pageId/detail/:detailId',
        component: CommonPageDetailComponent,
        data: { headerDisplay: 'none' },
      },
    ],
    data: {
      headerDisplay: 'none',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonPageRoutingModule {}
