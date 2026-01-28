import {Component, Input} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() name?: string;

}
