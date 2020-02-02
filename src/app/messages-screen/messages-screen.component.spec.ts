import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesScreenComponent } from './messages-screen.component';

describe('MessagesScreenComponent', () => {
  let component: MessagesScreenComponent;
  let fixture: ComponentFixture<MessagesScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
