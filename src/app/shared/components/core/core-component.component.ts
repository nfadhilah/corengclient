import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DynamicComponentHostDirective } from '../../directives/dynamic-component-host.directive';
import { CoreComponentFactory } from './core-component-factory';

@Component({
  selector: 'app-core-component',
  templateUrl: './core-component.component.html',
})
export class CoreComponentComponent implements OnInit {
  @ViewChild(DynamicComponentHostDirective, { static: true })
  host: DynamicComponentHostDirective;

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

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
