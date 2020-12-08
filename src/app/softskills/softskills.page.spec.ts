import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoftskillsPage } from './softskills.page';

describe('SoftskillsPage', () => {
  let component: SoftskillsPage;
  let fixture: ComponentFixture<SoftskillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftskillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoftskillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
