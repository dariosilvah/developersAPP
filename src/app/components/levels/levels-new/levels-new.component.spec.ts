import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsNewComponent } from './levels-new.component';

describe('LevelsNewComponent', () => {
  let component: LevelsNewComponent;
  let fixture: ComponentFixture<LevelsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
