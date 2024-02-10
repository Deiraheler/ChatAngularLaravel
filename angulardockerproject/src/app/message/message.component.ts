import {Component, Input} from '@angular/core';
import {message} from "../shared/message";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.sass'
})
export class MessageComponent {
  @Input() message!: message;
  @Input() userID!: number;
}
