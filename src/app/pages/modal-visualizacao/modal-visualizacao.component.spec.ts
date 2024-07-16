import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVisualizacaoComponent } from './modal-visualizacao.component';

describe('ModalVisualizacaoComponent', () => {
  let component: ModalVisualizacaoComponent;
  let fixture: ComponentFixture<ModalVisualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalVisualizacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalVisualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
