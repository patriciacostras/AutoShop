import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPartsComponent } from './index-parts.component';

describe('IndexPartsComponent', () => {
  let component: IndexPartsComponent;
  let fixture: ComponentFixture<IndexPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
