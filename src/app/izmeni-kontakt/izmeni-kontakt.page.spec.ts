import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IzmeniKontaktPage } from './izmeni-kontakt.page';

describe('IzmeniKontaktPage', () => {
  let component: IzmeniKontaktPage;
  let fixture: ComponentFixture<IzmeniKontaktPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IzmeniKontaktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
