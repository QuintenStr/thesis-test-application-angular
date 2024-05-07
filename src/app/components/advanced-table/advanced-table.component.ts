import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';

import { PersonService } from '../../services/person.service';
import { Person } from './../../pages/model/person.model';
import {
  NgbdSortableHeader,
  SortEvent,
} from '../../services/sortable.directive';
@Component({
  selector: 'app-advanced-table',
  templateUrl: './advanced-table.component.html',
  styleUrl: './advanced-table.component.css',
})
export class AdvancedTableComponent implements OnInit {
  persons$: Observable<Person[]>;
  total$: Observable<number>;

  @Input() csvPath: string = '';

  ngOnInit(): void {
    if (this.csvPath) {
      this.service.loadCsvData(this.csvPath);
    }
  }
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> =
    new QueryList();

  constructor(public service: PersonService) {
    this.persons$ = service.persons$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
