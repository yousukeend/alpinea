import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopComponent } from './pages/top/top.component';
import { InfoComponent } from './pages/info/info.component';
import { JudgmentComponent } from './pages/judgment/judgment.component';
import { ResultComponent } from './pages/result/result.component';
import { QuizComponent } from './pages/quiz/quiz.component';
//Angular Material
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    InfoComponent,
    JudgmentComponent,
    ResultComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
