import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopBarComponent } from './main-top-bar.component';

describe('TopBarComponent', () => {
  let component: MainTopBarComponent;
  let fixture: ComponentFixture<MainTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
