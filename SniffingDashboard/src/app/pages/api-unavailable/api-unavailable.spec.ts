import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUnavailable } from './api-unavailable';

describe('ApiUnavailable', () => {
  let component: ApiUnavailable;
  let fixture: ComponentFixture<ApiUnavailable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUnavailable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUnavailable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
