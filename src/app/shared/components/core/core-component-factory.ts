import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { BasicLayoutComponent } from '../basic-crud-layout/basic-layout.component';

@Injectable()
export class CoreComponentFactory {
  _component: any;

  get component() {
    return this._component;
  }

  set component(id) {
    switch (id) {
      case 1:
        this._component = this.componentFactoryResolver.resolveComponentFactory(
          BasicLayoutComponent
        );
        break;
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
}
