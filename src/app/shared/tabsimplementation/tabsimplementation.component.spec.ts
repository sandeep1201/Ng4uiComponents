import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsimplementationComponent } from './tabsimplementation.component';

describe('TabsimplementationComponent', () => {
  let component: TabsimplementationComponent;
  let fixture: ComponentFixture<TabsimplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsimplementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsimplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
