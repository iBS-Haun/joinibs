import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WindowData, WindowsService } from './windows.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css'],
})
export class WindowsComponent implements OnInit {
  constructor(private windowsService: WindowsService) {}
  routerConfig = {
    Studium: {
      isExternal: false,
      url: '/studium',
    },
    Ausbildung: {
      isExternal: false,
      url: '/ausbildung',
    },
    Karriere: {
      isExternal: true,
      url: 'https://www.ibs-banking.com/de/unternehmen/karriere.html',
    },
  };
  windowContent: Observable<WindowData[]> = new Subject();
  ngOnInit(): void {
    this.windowContent = this.windowsService.getWindowsData();
  }
  img: string = 'http://localhost:1337';
}
