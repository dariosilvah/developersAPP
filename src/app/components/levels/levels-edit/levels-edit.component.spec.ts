import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsEditComponent } from './levels-edit.component';

describe('LevelsEditComponent', () => {
  let component: LevelsEditComponent;
  let fixture: ComponentFixture<LevelsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
