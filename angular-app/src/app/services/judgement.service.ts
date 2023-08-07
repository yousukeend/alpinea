import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from './quiz.service';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class JudgementService {
  isCorrectAnswer: boolean = false;

  quizCount: number = 1;

  constructor(private router: Router, private quizService: QuizService) {}

  initQuiz() {
    this.quizCount = 1;
  }

  setJudgeAns(ans: boolean) {
    this.isCorrectAnswer = ans;
  }

  getQuizCount(): number {
    return this.quizCount;
  }

  nextQuiz() {
    if (this.quizCount < 7) {
      this.quizCount += 1;
      this.quizService.countUp();
      this.router.navigateByUrl('/quiz');
    } else {
      this.router.navigateByUrl('/result');
    }
  }

  //進行中の問題番号
  get quizCurrentCount(): number {
    return this.quizCount;
  }

  //正誤判定の取得
  get quizCorrectAnswer(): boolean {
    return this.isCorrectAnswer;
  }
}
