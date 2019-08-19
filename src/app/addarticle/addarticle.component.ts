import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { obj,ModelService } from '../model.service';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  form:FormGroup;
  newData:obj;
  constructor(private route:Router,private model:ModelService,private fb:FormBuilder) { 
    this.newData = {};
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
    this.createForm();
  }
  
  saveClicked(){
    this.newData.sourceText = this.form.get("heading").value;
    this.newData.descriptionText = this.form.get("description").value;
    this.newData.contentText = this.form.get("content").value;
    this.newData.authorText = this.form.get("author").value;
    this.newData.dateText = this.form.get("date").value;
    this.newData.imageurlText = this.form.get("sourceURL").value;
    this.model.addNews(this.newData);
    this.route.navigateByUrl('');
    
  }
  cancel(){
    this.route.navigateByUrl('');
  }
}
