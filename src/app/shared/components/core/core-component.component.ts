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

@Component({
  selector: 'app-core-component',
  templateUrl: './core-component.component.html',
})
export class CoreComponentComponent implements OnInit {
  @ViewChild(DynamicComponentHostDirective, { static: true })
  host: DynamicComponentHostDirective;
  @Input() config: any;
  @Input() data: any[];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private componentFactory: CoreComponentFactory
  ) {}

  ngOnInit(): void {
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
    coreLayout.deleteEvent.subscribe((item) => this.onDelete(coreLayout, item));
  }

  onDelete(ref: CoreLayout, item: any) {
    ref.data = ref.data.filter((d) => d.id !== item.id);
  }
}
