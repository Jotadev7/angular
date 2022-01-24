import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: []
})
export class TasksComponent implements OnInit {

  todolist$: Observable<any[]> = this.taskService.getTodoList$;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.todolist$ = this.taskService.getTodoList$;
  }

}
