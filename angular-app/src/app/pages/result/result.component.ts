import { Component } from '@angular/core';
import { JudgementService } from '../../services/judgement.service';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  constructor(
    public judgementService: JudgementService,
    public QuizService: QuizService,
    private router: Router
  ) {}

  restart() {
    this.judgementService.initQuiz();
    this.QuizService.initQuiz();
    this.router.navigateByUrl('/');
  }
}
