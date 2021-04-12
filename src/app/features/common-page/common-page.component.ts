import { Component, OnInit } from '@angular/core';
import { UiStateQuery } from '../../state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.css'],
})
export class CommonPageComponent implements OnInit {
  config$: Observable<any>;
  data$: Observable<any[]>;

  constructor(private uiStateQuery: UiStateQuery) {}

  ngOnInit(): void {
    this.config$ = this.uiStateQuery.config$;
    this.data$ = this.uiStateQuery.data$;
  }
}
