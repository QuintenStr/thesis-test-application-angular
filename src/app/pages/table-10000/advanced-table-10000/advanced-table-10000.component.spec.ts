import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTable10000Component } from './advanced-table-10000.component';

describe('AdvancedTable10000Component', () => {
  let component: AdvancedTable10000Component;
  let fixture: ComponentFixture<AdvancedTable10000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedTable10000Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedTable10000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
