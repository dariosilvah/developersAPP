import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersNewComponent } from './developers-new.component';

describe('DevelopersNewComponent', () => {
  let component: DevelopersNewComponent;
  let fixture: ComponentFixture<DevelopersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopersNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
