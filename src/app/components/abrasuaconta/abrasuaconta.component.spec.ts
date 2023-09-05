import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrasuacontaComponent } from './abrasuaconta.component';

describe('AbrasuacontaComponent', () => {
  let component: AbrasuacontaComponent;
  let fixture: ComponentFixture<AbrasuacontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrasuacontaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrasuacontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
