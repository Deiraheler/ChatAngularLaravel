import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import Echo from 'laravel-echo';

declare global {
  interface Window {
    Echo: any;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'angulardockerproject';

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.Echo = new Echo({
        broadcaster: 'pusher',
        key: 'local',
        wsHost: window.location.hostname,
        wsPort: 6001,
        disableStats: true,
        encrypted: false,
        enabledTransports: ['ws', 'wss'],
      });
    }
  }
}
