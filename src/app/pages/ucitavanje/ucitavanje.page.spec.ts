import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UcitavanjePage } from './ucitavanje.page';

describe('UcitavanjePage', () => {
  let component: UcitavanjePage;
  let fixture: ComponentFixture<UcitavanjePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UcitavanjePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
