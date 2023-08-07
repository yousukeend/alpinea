import { Injectable } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { Quiz } from '../types';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  randomQuizList: Quiz[] = [];
  randomQuizCount: number = 0;
  quizList = QUIZ_LIST;

  constructor() {}

  initQuiz() {
    this.randomQuizList = [];
  }

  //クイズが開始時に一回だけ実行する
  startQuiz() {
    this.randomQuizList = _.shuffle(this.quizList).slice(0, 7);
  }

  //次の進行へ進むカウント
  countUp() {
    this.randomQuizCount += 1;
  }

  //問題文の取得
  get currentQuizText(): string {
    return this.randomQuizList[this.randomQuizCount].quizText;
  }

  //正解の単語の取得
  get answerWord(): string {
    return this.randomQuizList[this.randomQuizCount].ansWord;
  }

  //正解の説明文の取得
  get answerExplanation(): string {
    return this.randomQuizList[this.randomQuizCount].ansExp;
  }
}
