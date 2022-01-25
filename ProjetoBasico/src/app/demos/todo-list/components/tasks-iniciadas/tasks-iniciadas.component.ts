import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styleUrls: []
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]> = this.taskService.getTodoList$;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit(): void {
    this.iniciados$ = this.store.getTodoList().pipe(map(todolist => todolist.filter(task => task.iniciado && !task.finalizado)));
  }

  onToggle(event : any) {
    this.taskService.toggle(event);
  }
}
