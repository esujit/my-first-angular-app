import {Component, Input} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NewTaskData} from "./new-task/new-task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input({required: true}) userId: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;

  constructor(private taskService: TasksService) {
  }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onClickAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onTaskComplete(id: string) {

  }
}
