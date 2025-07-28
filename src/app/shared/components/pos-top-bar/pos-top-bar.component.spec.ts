import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosTopBarComponent } from './pos-top-bar.component';

describe('PosTopBarComponent', () => {
  let component: PosTopBarComponent;
  let fixture: ComponentFixture<PosTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
