import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { obj,ModelService } from '../model.service';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  form:FormGroup;
  newData:obj;
  constructor(private route:Router,private model:ModelService,private fb:FormBuilder) { 
    this.newData = {
      sourceText : "",
      descriptionText : "",
      contentText: "",
      authorText:"",
      dateText:"",
      imageurlText:""
    };
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
    if(this.validate(this.form.get("heading").value,this.form.get("description").value,this.form.get("content").value, this.form.get("author").value,this.form.get("date").value)){
      this.newData.sourceText = this.form.get("heading").value;
      this.newData.descriptionText = this.form.get("description").value;
      this.newData.contentText = this.form.get("content").value;
      this.newData.authorText = this.form.get("author").value;
      this.newData.dateText = this.form.get("date").value;
      this.newData.imageurlText = this.form.get("sourceURL").value;
      this.model.addNews(this.newData);
      alert("News Successfully Added");
      this.route.navigateByUrl('');
    }
  }
  validate(heading,description,content,author,date){
   if(heading == "" || description == "" || content == "" || author == "" || date == ""){
     alert("All the fields are necessarcy except image");
     return false;
   }
   return true;
  }
  cancel(){
    this.route.navigateByUrl('');
  }
}
