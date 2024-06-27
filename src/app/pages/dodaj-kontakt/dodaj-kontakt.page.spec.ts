import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DodajKontaktPage } from './dodaj-kontakt.page';

describe('DodajKontaktPage', () => {
  let component: DodajKontaktPage;
  let fixture: ComponentFixture<DodajKontaktPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DodajKontaktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
