import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MessageDetails} from '../message-details/message-details.component';

@Component({
  selector: 'app-my-first-comp',
  imports: [
    FormsModule,
    MessageDetails
  ],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  // Two-way binding variables
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  onSubmit() {
    // console.log(this.name);
    this.isSubmitted = true;
    this.messages.push({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    console.log(this.messages);
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
