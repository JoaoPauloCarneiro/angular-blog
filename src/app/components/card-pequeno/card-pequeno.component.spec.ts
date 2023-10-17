import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPequenoComponent } from './card-pequeno.component';

describe('CardPequenoComponent', () => {
  let component: CardPequenoComponent;
  let fixture: ComponentFixture<CardPequenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPequenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPequenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
