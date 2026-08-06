import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SniffingGrid } from './sniffing-grid';

describe('SniffingGrid', () => {
  let component: SniffingGrid;
  let fixture: ComponentFixture<SniffingGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SniffingGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SniffingGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
