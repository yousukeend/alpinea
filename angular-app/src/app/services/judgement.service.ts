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

  //問題番号の初期化処理
  initQuiz() {
    this.quizCount = 1;
    this.isCorrectAnswer = false;
  }

  //正誤判定をさせる
  setJudgeAns(ans: boolean) {
    this.isCorrectAnswer = ans;
  }

  //問題番号を取得
  getQuizCount(): number {
    return this.quizCount;
  }

  //クイズの進行管理
  nextQuiz() {
    if (this.quizCount < 7) {
      this.quizCount += 1;
      this.quizService.countUp();
      this.router.navigateByUrl('/quiz');
    } else {
      this.router.navigateByUrl('/result');
    }
  }

  //正誤判定の取得
  get quizCorrectAnswer(): boolean {
    return this.isCorrectAnswer;
  }
}
