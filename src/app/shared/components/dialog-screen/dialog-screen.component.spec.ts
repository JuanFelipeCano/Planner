import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScreenComponent } from './dialog-screen.component';

describe('DialogScreenComponent', () => {
  let component: DialogScreenComponent;
  let fixture: ComponentFixture<DialogScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
