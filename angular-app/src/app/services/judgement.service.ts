import { Injectable } from '@angular/core';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class JudgementService {
  private _isCorrectAnswer: boolean = false;
  private _quizScore: number = 0;
  private _userSkillLevel: string = '';

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
  classifySkillLevel() {
    if (this._quizScore >= 7) {
      this._userSkillLevel = 'プロ';
    } else if (this._quizScore >= 5) {
      this._userSkillLevel = '上級者';
    } else if (this._quizScore >= 3) {
      this._userSkillLevel = '中級者';
    } else {
      this._userSkillLevel = '初心者';
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
  get userSkill(): string {
    return this._userSkillLevel;
  }
}
