import {Component, Inject, OnInit} from '@angular/core';
import {message} from "../shared/message";
import {MessageComponent} from "../message/message.component";
import {CommonModule} from "@angular/common";
import {InputFieldComponent} from "../input-field/input-field.component";
import {Subscription} from "rxjs";
import {CommunicationService} from "../shared/communication.service";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent, InputFieldComponent, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.sass'
})
export class ChatComponent implements OnInit{
  chatTitle: string = "Main chat";
  userID: number = 1;
  data: any;
  messages: message[] = [];

  private subscription: Subscription;

  constructor(private communicationService: CommunicationService, private apiService: ApiService) {
    this.subscription = this.communicationService.message$.subscribe(message => {
      this.addNewMessage(message);
    });
  }

  ngOnInit() {
    this.apiService.getMessages().subscribe(messages => {
      console.log(messages);
      for(let messageObj of messages){
        this.messages.push(new message(messageObj.id, messageObj.content, messageObj.created_at, messageObj.user_id, messageObj.seen));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addNewMessage(messageText: string) {
    this.messages.push(new message(8, messageText, new Date().getTime(), this.userID, false));
  }
}
