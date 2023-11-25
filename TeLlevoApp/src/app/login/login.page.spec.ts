import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Fomulario de ingreso', () => {
    const compiled = fixture.nativeElement;
    const formElement = compiled.querySelector('form');

    expect(formElement).toBeTruthy();

  });

  it('existe campo de usuario', () => {
    const compiled = fixture.nativeElement;
    const usuarioInput = compiled.querySelector('ion-input[formControlName="Usuario"]');
  
    expect(usuarioInput).toBeTruthy();
  });

  it('Existe campo de contraseña', () => {
    const compiled = fixture.nativeElement;
    const contrasenaInput = compiled.querySelector('ion-input[formControlName="Contrasena"]');
  
    expect(contrasenaInput).toBeTruthy();
  });
});
