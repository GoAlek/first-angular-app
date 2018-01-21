import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItunesAutoComponent } from './itunes-auto.component';

describe('ItunesAutoComponent', () => {
  let component: ItunesAutoComponent;
  let fixture: ComponentFixture<ItunesAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItunesAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItunesAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
