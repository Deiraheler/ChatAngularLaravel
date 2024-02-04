import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

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
  inputMessage!: string;

  addNewMessage(){
    console.log(this.inputMessage);
    this.inputMessage = "";
  }
}
