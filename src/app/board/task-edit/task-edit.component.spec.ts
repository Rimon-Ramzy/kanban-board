import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditComponent } from './task-edit.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from '../board-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TaskEditComponent', () => {
  let component: TaskEditComponent;
  let fixture: ComponentFixture<TaskEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivatedRoute, CommonModule, BoardRoutingModule, FormsModule, ReactiveFormsModule],
      declarations: [TaskEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
