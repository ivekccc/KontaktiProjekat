import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrikazKontaktaPage } from './prikaz-kontakta.page';

describe('PrikazKontaktaPage', () => {
  let component: PrikazKontaktaPage;
  let fixture: ComponentFixture<PrikazKontaktaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrikazKontaktaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
