import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesertaPage } from './peserta.page';

describe('PesertaPage', () => {
  let component: PesertaPage;
  let fixture: ComponentFixture<PesertaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PesertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
