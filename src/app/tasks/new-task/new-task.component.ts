import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {type NewTaskData } from './new-task.model'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelAddTask = new EventEmitter<void>();
  @Output() addTaskEvent = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelAddTask() {
    this.cancelAddTask.emit();
  }

  onSubmit() {
    this.addTaskEvent.emit({title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate});
  }
}
