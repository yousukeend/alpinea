import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopComponent } from './top/top.component';
import { InfoComponent } from './info/info.component';
//Angular Material
import {MatButtonModule} from '@angular/material/button';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { JudgmentComponent } from './judgment/judgment.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    InfoComponent,
    QuizPageComponent,
    JudgmentComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
