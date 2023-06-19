import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path: '', component: TopComponent},
  {path: 'info', component: InfoComponent},
  {path: 'quiz', component: QuizPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
