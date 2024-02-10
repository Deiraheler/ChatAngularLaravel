import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'angulardockerproject';

  ngOnInit() {
    // Initialize Pusher client-side
    const pusher = new Pusher('57d36daaf122cc877bce', {
      cluster: 'eu',
      // useTLS is recommended for secure connections
      useTLS: true
    });

    // Subscribe to a channel
    const channel = pusher.subscribe('chat');

    // Bind to an event on that channel
    channel.bind('MessageSent', (data: any) => {
      console.log(data);
    });
  }
}
