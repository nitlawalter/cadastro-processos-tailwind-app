import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosRegisterComponent } from './processos-register.component';

describe('ProcessosRegisterComponent', () => {
  let component: ProcessosRegisterComponent;
  let fixture: ComponentFixture<ProcessosRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessosRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
