import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeminatorComponent } from './meminator.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";

describe('MeminatorComponent', () => {
  let component: MeminatorComponent;
  let fixture: ComponentFixture<MeminatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [MeminatorComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeminatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
