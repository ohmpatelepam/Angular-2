import { Component, OnInit, Injectable } from '@angular/core';
import { ModelService,obj } from './model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  // data:Map<String,Array<obj>>;
  constructor(private model:ModelService){ 
    // this.data = undefined;
  };

  ngOnInit() {
    console.log("ngonit called");
  }
  // changenews(event){
  //   console.log("on changed");
  //   console.log(event);
  //   this.data = this.model.getFilterData(event);
  // }
  



}
