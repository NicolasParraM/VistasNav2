import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
  .side {
    width: 180px;
    min-height: 88vh;
    display: flex;
  }


  @media screen and (max-width: 600px) {

    .side{
    width: 100%;
    min-height: 44vh;
    display: flex;
    }

  }

  `]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
