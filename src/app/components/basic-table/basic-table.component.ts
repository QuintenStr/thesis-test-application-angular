import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../pages/model/person.model';
import { Observable } from 'rxjs';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.css',
})
export class BasicTableComponent implements OnInit {
  persons$: Observable<Person[]>;

  @Input() csvPath: string = '';

  ngOnInit(): void {
    if (this.csvPath) {
      this.service.loadCsvData(this.csvPath);
    }
  }

  constructor(public service: PersonService) {
    this.persons$ = service.persons$;
  }
}
