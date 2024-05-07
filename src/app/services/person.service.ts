/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from './sortable.directive';
import { HttpClient } from '@angular/common/http';
import { CsvParserService } from './csv-parser.service';
import { Person } from '../pages/model/person.model';

interface SearchResult {
  persons: Person[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: any, v2: any) => {
  if (typeof v1 === 'number' && typeof v2 === 'number') {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  } else if (v1 instanceof Date && v2 instanceof Date) {
    return v1.getTime() < v2.getTime()
      ? -1
      : v1.getTime() > v2.getTime()
      ? 1
      : 0;
  } else if (typeof v1 === 'boolean' && typeof v2 === 'boolean') {
    return v1 === v2 ? 0 : v1 ? -1 : 1;
  } else {
    return v1.toString().localeCompare(v2.toString());
  }
};

function sort(
  persons: Person[],
  column: SortColumn,
  direction: string
): Person[] {
  console.log('Sorting by:', column, 'Direction:', direction);

  if (direction === '' || column === '') {
    return persons;
  } else {
    return [...persons].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(person: Person, term: string) {
  return (
    person.username.toLowerCase().includes(term.toLowerCase()) ||
    person.firstName.toLowerCase().includes(term.toLowerCase()) ||
    person.lastName.toLowerCase().includes(term.toLowerCase())
  );
}

@Injectable({ providedIn: 'root' })
export class PersonService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _persons$ = new BehaviorSubject<Person[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _allPersons: Person[] = [];

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
  };

  constructor(private http: HttpClient, private csvParser: CsvParserService) {
    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(1000),
        switchMap(() => this._search()),
        delay(0),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._persons$.next(result.persons);
        this._total$.next(result.total);
      });

    this._search$.next();
  }

  get persons$() {
    return this._persons$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  set sortColumn(sortColumn: SortColumn) {
    this._set({ sortColumn });
  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    let persons = sort(
      this._allPersons,
      this._state.sortColumn,
      this._state.sortDirection
    );
    persons = persons.filter((country) =>
      matches(country, this._state.searchTerm)
    );
    const total = persons.length;
    persons = persons.slice(
      (this._state.page - 1) * this._state.pageSize,
      this._state.page * this._state.pageSize
    );

    return of({ persons, total });
  }

  loadCsvData(csvUrl: string): void {
    this._loading$.next(true);
    this.http.get(csvUrl, { responseType: 'text' }).subscribe({
      next: (csvData) => {
        const parsedData = this.csvParser.parseCsv(csvData);
        this._allPersons = parsedData;
        this._persons$.next(this._allPersons.slice());
        this._loading$.next(false);
      },
      error: (error) => {
        console.error('Failed to load CSV data', error);
        this._loading$.next(false);
      },
    });
  }
}
