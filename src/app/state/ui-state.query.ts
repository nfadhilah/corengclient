import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UiStateStore, UiStateState } from './ui-state.store';

@Injectable({ providedIn: 'root' })
export class UiStateQuery extends Query<UiStateState> {
  menuItems$ = this.select((state) => state.menuItems);
  config$ = this.select((state) => state.config);
  data$ = this.select((state) => state.data);

  constructor(protected store: UiStateStore) {
    super(store);
  }

  getMenuById(id) {
    return this.select((state) => state.menuItems.filter((m) => m.id === id));
  }
}
