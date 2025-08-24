import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MessageDetails} from '../message-details/message-details.component';
import {MyFirstService} from '../services/my-first.service';

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

  constructor(private service: MyFirstService) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted=this.messages.length > 0;
  }

  //property injection
  // private service: MyFirstService =inject(MyFirstService)
  // constructor(
  // ) {
  //   this.messages = this.service.getAllMessages();
  //   this.isSubmitted=this.messages.length > 0;
  // }

  onSubmit() {
    // console.log(this.name);
    this.isSubmitted = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    console.log(this.messages);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
