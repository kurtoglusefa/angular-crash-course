import {Injectable} from '@angular/core';

// it is also called as a decorator
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({name: 'John Doe', email: 'john@mail.com', message: 'Hello World!'});
    this.insert({name: 'Jane Doe', email: 'jane@mail.com', message: 'Hello Angular!'});
    this.insert({name: 'Jess Doe', email: 'jess@mail.com', message: 'Hello Service!'});
  }

  insert(message: { name: string, email: string, message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
  }
}
