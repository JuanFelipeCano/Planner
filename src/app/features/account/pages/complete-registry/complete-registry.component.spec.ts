import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRegistryComponent } from './complete-registry.component';

describe('CompleteRegistryComponent', () => {
  let component: CompleteRegistryComponent;
  let fixture: ComponentFixture<CompleteRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteRegistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
