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

  //最初からクイズをスタートさせる
  restart() {
    this.router.navigateByUrl('/');
  }
}
