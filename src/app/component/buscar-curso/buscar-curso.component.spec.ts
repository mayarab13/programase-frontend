import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCursoComponent } from './buscar-curso.component';

describe('BuscarCursoComponent', () => {
  let component: BuscarCursoComponent;
  let fixture: ComponentFixture<BuscarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
