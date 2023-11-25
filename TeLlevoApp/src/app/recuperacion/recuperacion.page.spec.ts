import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RecuperacionPage } from './recuperacion.page';

describe('RecuperacionPage', () => {
  let component: RecuperacionPage;
  let fixture: ComponentFixture<RecuperacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperacionPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('existe campo usuario', () => {
    const compiled = fixture.nativeElement;
    const usernameInput = compiled.querySelector('ion-input[type="text"]');

    expect(usernameInput).toBeTruthy();
  });
});
