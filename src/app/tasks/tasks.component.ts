import { Component, OnInit } from "@angular/core";

import { Task } from "./shared/task.model";

const TASKS: Array<Task> = [
    { id:1, title: 'fazer tarefa 1' },
    { id:2, title: 'fazer tarefa 2' },
    { id:3, title: 'fazer tarefa 3' },
    { id:4, title: 'fazer tarefa 4' },
    { id:5, title: 'fazer tarefa 5' },
    { id:6, title: 'fazer tarefa 6' },
    { id:7, title: 'fazer tarefa 7' },
    { id:8, title: 'fazer tarefa 8' },
]
const TASKS2: any[] = []
@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit{
    public tasks
    public constructor(){
    }
    public ngOnInit(){
        this.tasks = TASKS
    }
}