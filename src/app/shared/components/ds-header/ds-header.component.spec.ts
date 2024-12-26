import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsHeaderComponent } from './ds-header.component';

describe('DsHeaderComponent', () => {
  let component: DsHeaderComponent;
  let fixture: ComponentFixture<DsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
