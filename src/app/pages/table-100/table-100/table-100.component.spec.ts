import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table100Component } from './table-100.component';

describe('Table100Component', () => {
  let component: Table100Component;
  let fixture: ComponentFixture<Table100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Table100Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Table100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
