import { Injectable } from '@angular/core';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class JudgementService {
  private isCorrectAnswer: boolean = false;
  private quizScore: number = 0;

  constructor() {}

  //正誤判定の初期化処理
  initQuiz() {
    this.isCorrectAnswer = false;
    this.quizScore = 0;
  }

  //正誤判定をさせる
  setJudgeAns(ans: boolean) {
    this.isCorrectAnswer = ans;
    if (this.isCorrectAnswer) {
      this.quizScore++;
    }
  }

  //正誤判定の取得
  get quizCorrectAnswer(): boolean {
    return this.isCorrectAnswer;
  }

  //正解数の取得
  get totalQuizScore(): number {
    return this.quizScore;
  }
}
