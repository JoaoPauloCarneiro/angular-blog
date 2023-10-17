import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarraComponent } from './menu-barra.component';

describe('MenuBarraComponent', () => {
  let component: MenuBarraComponent;
  let fixture: ComponentFixture<MenuBarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
