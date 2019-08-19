import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-newscell',
  templateUrl: './newscell.component.html',
  styleUrls: ['./newscell.component.css']
})
export class NewscellComponent implements OnInit {

  @Input() image: string;
  @Input() source: string;
  @Input() date: string;
  @Input() author: string;
  @Input() description: String;

  constructor() { }

  ngOnInit() {
  
  }
}
