import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonPageComponent } from './common-page.component';

const routes: Routes = [
  {
    path: '',
    component: CommonPageComponent,
    children: [
      {
        path: ':id',
        component: CommonPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonPageRoutingModule {}
