import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css'],
})
export class BasicLayoutComponent {
  searchInput: string;
  @Input() readOnly = false;
  @Input() displayData: any[];
  @Input() searchColumns: string;
  @Input() orderColumn: any[];
  @Input() tableDataTemplate: TemplateRef<any>;
  @Output() onAdded = new EventEmitter();
  @Output() onEdited = new EventEmitter<any>();
  @Output() onDeleted = new EventEmitter<any>();
  @Output() onViewed = new EventEmitter<any>();

  onAdd() {
    this.onAdded.emit();
  }

  onEdit(item: any) {
    this.onEdited.emit(item);
  }

  onDelete(item: any) {
    this.onDeleted.emit(item);
  }

  cancel() {}

  onView(item: any) {
    this.onViewed.emit(item);
  }
}
