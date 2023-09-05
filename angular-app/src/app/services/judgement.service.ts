import { Injectable } from '@angular/core';
import { NUMBER_OF_QUIZ } from '../const';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class JudgementService {
  private _isCorrectAnswer: boolean = false;
  private _quizScore: number = 0;

  constructor() {}

  //正誤判定の初期化処理
  initQuiz() {
    this._isCorrectAnswer = false;
    this._quizScore = 0;
  }

  //正誤判定の結果を格納して正解数をカウントする
  setJudgeAns(selectedAnswer: boolean) {
    this._isCorrectAnswer = selectedAnswer;
    if (this._isCorrectAnswer) {
      this._quizScore++;
    }
  }

  //正解数によって階級判別をさせる
  classifySkillLevel(score: number): string {
    if (score >= NUMBER_OF_QUIZ) {
      return 'プロ';
    } else if (score >= NUMBER_OF_QUIZ - 2) {
      return '上級者';
    } else if (score >= NUMBER_OF_QUIZ - 4) {
      return '中級者';
    } else {
      return '初心者';
    }
  }

  //正誤判定の取得
  get quizCorrectAnswer(): boolean {
    return this._isCorrectAnswer;
  }

  //正解数の取得
  get quizScore(): number {
    return this._quizScore;
  }

  //ユーザーの階級を取得
  get userSkillLevel(): string {
    return this.classifySkillLevel(this._quizScore);
  }
}
