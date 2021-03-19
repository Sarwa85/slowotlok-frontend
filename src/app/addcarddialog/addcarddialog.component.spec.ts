import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarddialogComponent } from './addcarddialog.component';

describe('AddcarddialogComponent', () => {
  let component: AddcarddialogComponent;
  let fixture: ComponentFixture<AddcarddialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcarddialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcarddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
