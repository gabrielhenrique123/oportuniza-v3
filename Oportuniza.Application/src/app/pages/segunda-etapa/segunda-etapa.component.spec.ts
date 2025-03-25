import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaEtapaComponent } from './segunda-etapa.component';

describe('SegundaEtapaComponent', () => {
  let component: SegundaEtapaComponent;
  let fixture: ComponentFixture<SegundaEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundaEtapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
