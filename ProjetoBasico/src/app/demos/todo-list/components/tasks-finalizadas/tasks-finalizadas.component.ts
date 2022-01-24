import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../todo.service';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styleUrls: []
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]> = this.taskService.getTodoList$;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.finalizados$ = this.taskService.getTodoList$;
  }
}
