import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { obj,ModelService } from '../model.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  form:FormGroup;
  constructor(private route:Router,private model:ModelService,private fb:FormBuilder) { 
    this.createForm();
  }
  createForm(){
    this.form = this.fb.group({
          heading: [''],
          description: [''],
          content:[''],
          date:[''],
          author:[''],
          sourceURL:['']
        });
  }

  ngOnInit() {
  }
  
  saveClicked(){
    this.route.navigateByUrl('');
  }
}
