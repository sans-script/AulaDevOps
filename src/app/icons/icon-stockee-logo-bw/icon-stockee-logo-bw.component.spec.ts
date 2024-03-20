import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStockeeLogoBwComponent } from './icon-stockee-logo-bw.component';

describe('IconStockeeLogoBwComponent', () => {
  let component: IconStockeeLogoBwComponent;
  let fixture: ComponentFixture<IconStockeeLogoBwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconStockeeLogoBwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconStockeeLogoBwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
