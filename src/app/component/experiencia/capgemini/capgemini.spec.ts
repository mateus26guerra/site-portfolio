import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capgemini } from './capgemini';

describe('Capgemini', () => {
  let component: Capgemini;
  let fixture: ComponentFixture<Capgemini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Capgemini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capgemini);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
