import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DynamicComponentHostDirective } from '../../directives/dynamic-component-host.directive';
import { CoreComponentFactory } from './core-component-factory';
import { CoreLayout } from '../../interfaces/core-layout.type';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { filter, first, take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UiStateQuery } from '../../../state';

@Component({
  selector: 'app-core-component',
  templateUrl: './core-component.component.html',
})
export class CoreComponentComponent implements OnInit {
  @ViewChild(DynamicComponentHostDirective, { static: true })
  host: DynamicComponentHostDirective;
  @Input() config: any;
  @Input() data: any[];
  apiResourceName: string;
  coreLayoutRef: CoreLayout;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentFactory: CoreComponentFactory,
    private nzModalService: NzModalService,
    private http: HttpClient,
    private uiStateQuery: UiStateQuery
  ) {}

  ngOnInit(): void {
    const state = this.uiStateQuery.getValue();
    this.apiResourceName = state.selectedMenu
      ? state.selectedMenu.resourceName
      : '';
    if (!this.apiResourceName)
      throw Error('Resource name cannot be null or empty.');

    this.loadComponent();
  }

  loadComponent() {
    this.componentFactory.component = 1;
    const componentFactory = this.componentFactory.component;

    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    const coreLayout = viewContainerRef.createComponent(componentFactory)
      .instance as CoreLayout;

    coreLayout.config = this.config;
    coreLayout.data = this.data;
    coreLayout.addEvent.subscribe(() => this.onAdd());
    coreLayout.editEvent.subscribe((item) => this.onEdit(item));
    coreLayout.deleteEvent.subscribe((item) => this.onDelete(coreLayout, item));

    this.coreLayoutRef = coreLayout;
  }

  createModalForm(title: string) {
    return this.nzModalService.create({
      nzTitle: title,
      nzContent: DynamicFormComponent,
      nzStyle: { width: '55em' },
      nzBodyStyle: { maxHeight: 'calc(100vh - 270px)', overflowY: 'auto' },
      nzMask: true,
      nzMaskClosable: false,
    });
  }

  onAdd() {
    const modalForm = this.createModalForm('Tambah Data');
    modalForm.componentInstance.fields = JSON.parse(
      JSON.stringify(this.config.form)
    );
    modalForm.afterClose
      .pipe(
        filter((value) => !!value),
        take(1)
      )
      .subscribe((value) => {
        this.coreLayoutRef.data = [...this.coreLayoutRef.data, value];
      });
  }

  onEdit(item: any) {
    const form = this.createModalForm('Ubah Data');
    form.componentInstance.fields = JSON.parse(
      JSON.stringify(this.config.form)
    );
    form.componentInstance.model = { ...item };
    form.afterClose
      .pipe(
        filter((value) => !!value),
        take(1)
      )
      .subscribe((value) => {
        const index = this.coreLayoutRef.data.indexOf(item);
        const data = [...this.coreLayoutRef.data];
        data[index] = { ...value };
        this.coreLayoutRef.data = [...data];
      });
  }

  onDelete(ref: CoreLayout, item: any) {
    ref.data = ref.data.filter((d) => d.id !== item.id);
    // this.http.delete(`/api/${resourceName}/${item.id}`).subscribe();
  }
}
