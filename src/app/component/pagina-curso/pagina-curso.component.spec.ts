import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCursoComponent } from './pagina-curso.component';

describe('PaginaCursoComponent', () => {
  let component: PaginaCursoComponent;
  let fixture: ComponentFixture<PaginaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
