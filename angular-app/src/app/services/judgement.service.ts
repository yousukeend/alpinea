import { Injectable } from '@angular/core';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class JudgementService {
  private isCorrectAnswer: boolean = false;

  constructor() {}

  //正誤判定の初期化処理
  initQuiz() {
    this.isCorrectAnswer = false;
  }

  //正誤判定をさせる
  setJudgeAns(ans: boolean) {
    this.isCorrectAnswer = ans;
  }

  //正誤判定の取得
  get quizCorrectAnswer(): boolean {
    return this.isCorrectAnswer;
  }
}
