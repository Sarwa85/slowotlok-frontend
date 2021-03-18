import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskdialogComponent } from './askdialog.component';

describe('AskdialogComponent', () => {
  let component: AskdialogComponent;
  let fixture: ComponentFixture<AskdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
