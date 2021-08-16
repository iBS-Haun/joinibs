import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ausbildung-windows',
  templateUrl: './ausbildung-windows.component.html',
  styleUrls: ['./ausbildung-windows.component.css']
})
export class AusbildungWindowsComponent implements OnInit {
  isCollapsed1 : boolean = true;
  isCollapsed2 : boolean = true;
  isCollapsed3 : boolean = true;
  
  constructor() {

   }

   toggleCollapse1(){
     this.isCollapsed1 = !this.isCollapsed1
   }
   toggleCollapse2(){
    this.isCollapsed2 = !this.isCollapsed2
  }
  toggleCollapse3(){
    this.isCollapsed3 = !this.isCollapsed3
  }

  ngOnInit(): void {
  }

}
