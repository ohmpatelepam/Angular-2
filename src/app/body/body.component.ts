import { Component, OnInit, Input } from '@angular/core';
import { ModelService, obj } from '../model.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() private data:Map<String,Array<obj>>;

  constructor(private model:ModelService,private route: ActivatedRoute) { 
    this.data = undefined;   
  }

  ngOnInit() {
    let scope = this;
    this.route.params.subscribe( params => {
      
      scope.data = this.model.getFilterData(params);
      console.log(scope.data);
    });
  }
 

  
}
