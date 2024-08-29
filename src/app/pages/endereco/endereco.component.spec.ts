import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnderecoPage } from './endereco.component';

describe('EnderecoPage', () => {
  let component: EnderecoPage;
  let fixture: ComponentFixture<EnderecoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
