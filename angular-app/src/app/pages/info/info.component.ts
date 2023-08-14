import { Component, OnInit } from '@angular/core';
import { JudgementService } from 'src/app/services/judgement.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private judgementService: JudgementService
  ) {}

  ngOnInit(): void {
    this.quizService.initQuiz();
    this.judgementService.initQuiz();
    this.quizService.startQuiz();
  }
}
