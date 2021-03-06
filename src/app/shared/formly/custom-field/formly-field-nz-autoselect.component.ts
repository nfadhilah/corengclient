import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-nz-autoselect',
  template: `
    <nz-select
      [class.ng-dirty]="showError"
      [nzPlaceHolder]="to.placeholder"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzMode]="to.multiple ? 'multiple' : 'default'"
      [nzShowArrow]="false"
      nzShowSearch
      nzAllowClear
      nzPlaceHolder="Select a person"
    >
      <ng-container
        *ngFor="let item of to.options | formlySelectOptions: field | async"
      >
        <nz-option-group *ngIf="item.group" [nzLabel]="item.label">
          <nz-option
            *ngFor="let child of item.group"
            [nzValue]="child.value"
            [nzDisabled]="child.disabled"
            [nzLabel]="child.label"
          >
          </nz-option>
        </nz-option-group>
        <nz-option
          *ngIf="!item.group"
          [nzValue]="item.value"
          [nzDisabled]="item.disabled"
          [nzLabel]="item.label"
        ></nz-option>
      </ng-container>
    </nz-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldNzAutoselectComponent extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
