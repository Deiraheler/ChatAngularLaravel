import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommunicationService} from "../shared/communication.service";

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.sass'
})
export class InputFieldComponent {
  inputMessage: string = '';

  constructor(private communicationService: CommunicationService) {}

  addNewMessage() {
    if (this.inputMessage.trim() !== '') {
      this.communicationService.sendMessage(this.inputMessage);
      this.inputMessage = "";
    }
  }
}

