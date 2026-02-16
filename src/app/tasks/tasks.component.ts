import {Component, Input} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [
    TaskComponent
  ],
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() name?: string;

}
