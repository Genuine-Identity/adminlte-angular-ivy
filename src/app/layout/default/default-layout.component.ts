import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css'],
})

export class DefaultLayoutComponent implements OnInit {

  constructor() {
    console.log('DefaultLayoutComponent');
  }

  ngOnInit() {
  }

}