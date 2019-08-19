import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { obj,ModelService } from '../model.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  @Input() heading:String;
  @Input() description:String;
  @Input() content:String;
  @Input() Date:Date;
  @Input() Author:String;
  @Input() 

  constructor(private route:Router,private model:ModelService) { }

  ngOnInit() {
  }
  
  saveClicked(){
    this.route.navigateByUrl('');
  }
}
