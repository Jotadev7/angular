import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: []
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]> = this.taskService.getTodoList$;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.iniciados$ = this.taskService.getTodoList$;
  }
}
