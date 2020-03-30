import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontsectionComponent } from './frontsection.component';

describe('FrontsectionComponent', () => {
  let component: FrontsectionComponent;
  let fixture: ComponentFixture<FrontsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
