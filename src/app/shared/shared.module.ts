import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ThemeConstantService } from './services/theme-constant.service';
import { SearchPipe } from './pipes/search.pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BasicLayoutComponent } from './components/basic-crud-layout/basic-layout.component';
import { DynamicComponentHostDirective } from './directives/dynamic-component-host.directive';
import { CoreComponentComponent } from './components/core/core-component.component';
import { CoreComponentFactory } from './components/core/core-component-factory';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { IconFilterPipe } from './pipes/iconFilter.pipe';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

const antd = [
  NzPopconfirmModule,
  NzCardModule,
  NzButtonModule,
  NzInputModule,
  NzTableModule,
  NzDropDownModule,
  NzSpinModule,
  NzTagModule,
];

@NgModule({
  exports: [
    ...antd,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NzIconModule,
    PerfectScrollbarModule,
    SearchPipe,
    IconFilterPipe,
    BasicLayoutComponent,
    CoreComponentComponent,
  ],
  imports: [
    ...antd,
    RouterModule,
    CommonModule,
    FormsModule,
    NzIconModule,
    NzToolTipModule,
    PerfectScrollbarModule,
  ],
  declarations: [
    SearchPipe,
    IconFilterPipe,
    BasicLayoutComponent,
    DynamicComponentHostDirective,
    CoreComponentComponent,
    DynamicFormComponent,
  ],
  providers: [ThemeConstantService, CoreComponentFactory],
})
export class SharedModule {}
