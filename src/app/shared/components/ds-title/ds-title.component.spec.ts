import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTitleComponent } from './ds-title.component';

describe('DsTitleComponent', () => {
  let component: DsTitleComponent;
  let fixture: ComponentFixture<DsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
