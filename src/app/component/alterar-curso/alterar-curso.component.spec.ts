import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCursoComponent } from './alterar-curso.component';

describe('AlterarCursoComponent', () => {
  let component: AlterarCursoComponent;
  let fixture: ComponentFixture<AlterarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
