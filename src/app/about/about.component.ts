import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { About, AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private aboutService: AboutService) {}
  aboutContent: Observable<About> = new Subject();
  resolvedContent: About | null = null;
  ngOnInit(): void {
    this.aboutContent = this.aboutService.getAboutData();
    this.aboutContent.subscribe((result) => (this.resolvedContent = result));
  }
}
