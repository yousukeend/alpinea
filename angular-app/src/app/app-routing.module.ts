import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './pages/info/info.component';
import { TopComponent } from './pages/top/top.component';
import { JudgmentComponent } from './pages/judgment/judgment.component';
import { ResultComponent } from './pages/result/result.component';
import { QuizComponent } from './pages/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'info', component: InfoComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'judge', component: JudgmentComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
