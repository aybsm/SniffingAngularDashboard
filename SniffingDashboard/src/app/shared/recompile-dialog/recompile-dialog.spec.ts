import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompileDialog } from './recompile-dialog';

describe('RecompileDialog', () => {
  let component: RecompileDialog;
  let fixture: ComponentFixture<RecompileDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecompileDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecompileDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
