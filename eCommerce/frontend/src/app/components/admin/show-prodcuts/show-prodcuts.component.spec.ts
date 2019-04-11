import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdcutsComponent } from './show-prodcuts.component';

describe('ShowProdcutsComponent', () => {
  let component: ShowProdcutsComponent;
  let fixture: ComponentFixture<ShowProdcutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProdcutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProdcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
