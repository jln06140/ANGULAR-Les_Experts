import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteLinkComponent } from './popup-delete-link.component';

describe('PopupDeleteLinkComponent', () => {
  let component: PopupDeleteLinkComponent;
  let fixture: ComponentFixture<PopupDeleteLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDeleteLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDeleteLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
