import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: []
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]> = this.taskService.getTodoList$;
  subscription: Subscription | any;

  constructor(private taskService: TasksService, private store: Store) { }

  ngOnInit(): void {
    this.todolist$ = this.store.getTodoList().pipe(map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));

    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
