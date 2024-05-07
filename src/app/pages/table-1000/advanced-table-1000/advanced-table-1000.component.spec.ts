import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTable1000Component } from './advanced-table-1000.component';

describe('AdvancedTable1000Component', () => {
  let component: AdvancedTable1000Component;
  let fixture: ComponentFixture<AdvancedTable1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedTable1000Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedTable1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
