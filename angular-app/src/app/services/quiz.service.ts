import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnsOption, Quiz } from '../types';
import { NUMBER_OF_QUIZ } from '../const';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private _randomQuizList: Quiz[] = [];
  private _randomQuizCount: number = 0;

  constructor(private router: Router, private http: HttpClient) {}

  //出題する配列の初期化
  initQuiz() {
    this._randomQuizList = [];
    this._randomQuizCount = 0;
  }

  //クイズが開始時に一回だけ実行する
  startQuiz() {
    this.http.get('../assets/quizData.json').subscribe((quizData: any) => {
      this._randomQuizList = _.shuffle(quizData).slice(0, NUMBER_OF_QUIZ);
    });
  }

  //クイズの進行を管理
  nextQuiz() {
    this._randomQuizCount++;

    if (this._randomQuizCount < NUMBER_OF_QUIZ) {
      this.router.navigateByUrl('/quiz');
    } else {
      this.router.navigateByUrl('/result');
    }
  }

  //問題番号を取得
  get quizCount(): number {
    return this._randomQuizCount;
  }

  //問題文の取得
  get currentQuizText(): string {
    return this._randomQuizList[this._randomQuizCount].quizText;
  }

  //問題の画像または動画の取得
  get currentQuizImg(): string {
    return this._randomQuizList[this._randomQuizCount].quizImg;
  }

  //問題の選択肢の取得
  get currentAnsOptions(): AnsOption[] {
    return this._randomQuizList[this._randomQuizCount].ansOptions;
  }

  //正解の単語の取得
  get answerWord(): string {
    return this._randomQuizList[this._randomQuizCount].ansWord;
  }

  //正解の説明文の取得
  get answerExplanation(): string {
    return this._randomQuizList[this._randomQuizCount].ansExp;
  }

  //正解の画像の取得
  get answerImage(): string {
    return this._randomQuizList[this._randomQuizCount].ansImg;
  }
}
