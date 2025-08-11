import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  announcements: string[] = [
    'Announcement 1',
    'Announcement 2',
    'Announcement 3',
    'Announcement 4',
    'Announcement 5',
    'Announcement 6',
    'Announcement 7',
    'Announcement 8',
    'Announcement 9',
    'Announcement 10'
  ]
}
