import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoGridComponent } from './crypto-grid.component';

describe('CryptoGridComponent', () => {
  let component: CryptoGridComponent;
  let fixture: ComponentFixture<CryptoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
