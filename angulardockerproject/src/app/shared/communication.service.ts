import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import Echo from 'laravel-echo';

declare global {
  interface Window {
    Echo: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private messageSource = new Subject<string>();

  message$ = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
    this.initializeWebSocketListeners();
  }

  initializeWebSocketListeners(): void {
    // Assuming Echo is already initialized elsewhere, like in AppComponent
    if (typeof window !== 'undefined' && window.Echo) {
      window.Echo.channel('chat')
        .listen('.NewMessageAdded', (e: any) => {
          this.messageSource.next(e.message);
        });
    }
  }

  sendMessage(content: string): void {
    // Replace the URL with your actual endpoint
    this.http.post('http://localhost:8800/api/post', { content }).subscribe({
      next: (response) => console.log('Message sent', response),
      error: (error) => console.error('Error sending message', error)
    });
  }
}
