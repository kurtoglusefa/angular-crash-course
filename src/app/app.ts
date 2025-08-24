import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyFirstCompComponent} from './my-first-comp/my-first-comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFirstCompComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-crash-course');
}
