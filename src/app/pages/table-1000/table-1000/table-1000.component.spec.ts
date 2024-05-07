import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table1000Component } from './table-1000.component';

describe('Table1000Component', () => {
  let component: Table1000Component;
  let fixture: ComponentFixture<Table1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Table1000Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Table1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
