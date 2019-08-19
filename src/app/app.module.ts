import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AsideComponent } from './aside/aside.component';
import { NewscellComponent } from './newscell/newscell.component';
import { LoaderComponent } from './loader/loader.component';
import {ModelService} from './model.service';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AsideComponent,
    NewscellComponent,
    LoaderComponent,
    AddarticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModelService
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
