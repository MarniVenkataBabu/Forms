import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantsInformationComponent } from './grants-information.component';

describe('GrantsInformationComponent', () => {
  let component: GrantsInformationComponent;
  let fixture: ComponentFixture<GrantsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrantsInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrantsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
