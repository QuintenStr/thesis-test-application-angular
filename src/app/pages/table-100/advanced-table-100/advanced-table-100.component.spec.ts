import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTable100Component } from './advanced-table-100.component';

describe('AdvancedTable100Component', () => {
  let component: AdvancedTable100Component;
  let fixture: ComponentFixture<AdvancedTable100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedTable100Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedTable100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
