import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table10000Component } from './table-10000.component';

describe('Table10000Component', () => {
  let component: Table10000Component;
  let fixture: ComponentFixture<Table10000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Table10000Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Table10000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
