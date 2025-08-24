import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyFirstCompComponent} from './my-first-comp/my-first-comp.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyFirstCompComponent, MenuComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-crash-course');
}
