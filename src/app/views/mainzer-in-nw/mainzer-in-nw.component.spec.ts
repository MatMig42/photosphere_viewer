import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainzerInNwComponent } from './mainzer-in-nw.component';

describe('MainzerInNwComponent', () => {
  let component: MainzerInNwComponent;
  let fixture: ComponentFixture<MainzerInNwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainzerInNwComponent]
    });
    fixture = TestBed.createComponent(MainzerInNwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
