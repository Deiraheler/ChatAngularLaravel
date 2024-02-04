import { Component } from '@angular/core';
import {message} from "../shared/message";
import {MessageComponent} from "../message/message.component";
import {CommonModule} from "@angular/common";
import {InputFieldComponent} from "../input-field/input-field.component";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent, InputFieldComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.sass'
})
export class ChatComponent {
  chatTitle: string = "Main chat";
  userID: number = 1;
  messages: message[] = [
    new message("Hello", new Date().getTime(), 1, true),
    new message("How are you?", new Date().getTime(), 1, true),
    new message("Hello My Friend", new Date().getTime(), 2, false),
    new message("I am great", new Date().getTime(), 2, false),
    new message("Good to hear ;)", new Date().getTime(), 1, true),
    new message("Hello", new Date().getTime(), 1, true),
    new message("How are you?", new Date().getTime(), 1, true),
    new message("Hello My Friend", new Date().getTime(), 2, false),
    new message("I am great", new Date().getTime(), 2, false),
    new message("Good to hear ;)", new Date().getTime(), 1, true),
    new message("Hello", new Date().getTime(), 1, true),
    new message("How are you?", new Date().getTime(), 1, true),
    new message("Hello My Friend", new Date().getTime(), 2, false),
    new message("I am great", new Date().getTime(), 2, false),
    new message("Good to hear ;)", new Date().getTime(), 1, true),
  ];

  addNewMessage(){

  }
}
