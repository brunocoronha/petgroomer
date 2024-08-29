import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientePageComponent } from './cliente.component';

describe('ClientePage', () => {
  let component: ClientePageComponent;
  let fixture: ComponentFixture<ClientePageComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
