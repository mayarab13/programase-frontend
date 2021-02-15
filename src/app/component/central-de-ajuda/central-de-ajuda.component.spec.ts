import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralDeAjudaComponent } from './central-de-ajuda.component';

describe('CentralDeAjudaComponent', () => {
  let component: CentralDeAjudaComponent;
  let fixture: ComponentFixture<CentralDeAjudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralDeAjudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralDeAjudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
