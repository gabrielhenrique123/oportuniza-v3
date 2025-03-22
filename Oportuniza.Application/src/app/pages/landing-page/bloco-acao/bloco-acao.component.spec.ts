import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoAcaoComponent } from './bloco-acao.component';

describe('BlocoAcaoComponent', () => {
  let component: BlocoAcaoComponent;
  let fixture: ComponentFixture<BlocoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoAcaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
