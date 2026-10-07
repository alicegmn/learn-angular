import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  tasks = [
    { id: 1, title: 'Lära mig Angular', done: false },
    { id: 2, title: 'Bygga en task-app', done: false },
  ];
}
