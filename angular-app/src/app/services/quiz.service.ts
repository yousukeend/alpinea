import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AnsOption } from '../types';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private randomQuizList: any[] = [];
  private randomQuizCount: number = 0;

  constructor(private router: Router, private http: HttpClient) {}

  //出題する配列の初期化
  initQuiz() {
    this.randomQuizList = [];
    this.randomQuizCount = 0;
  }

  //クイズが開始時に一回だけ実行する
  startQuiz() {
    this.http.get('../assets/const.json').subscribe((quizData: any) => {
      this.randomQuizList = _.shuffle(quizData).slice(0, 7);
    });
  }

  //クイズの進行を管理
  nextQuiz() {
    this.randomQuizCount++;

    if (this.randomQuizCount < 7) {
      this.router.navigateByUrl('/quiz');
    } else {
      this.router.navigateByUrl('/result');
    }
  }

  //問題番号を取得
  get quizCount(): number {
    return this.randomQuizCount;
  }

  //問題文の取得
  get currentQuizText(): string {
    return this.randomQuizList[this.randomQuizCount].quizText;
  }

  //問題の画像または動画の取得
  get currentQuizImg(): string {
    return this.randomQuizList[this.randomQuizCount].quizImg;
  }

  //問題の選択肢の取得
  get currentAnsOptions(): AnsOption[] {
    return this.randomQuizList[this.randomQuizCount].ansOptions;
  }

  //正解の単語の取得
  get answerWord(): string {
    return this.randomQuizList[this.randomQuizCount].ansWord;
  }

  //正解の説明文の取得
  get answerExplanation(): string {
    return this.randomQuizList[this.randomQuizCount].ansExp;
  }

  //正解の画像の取得
  get answerImage(): string {
    return this.randomQuizList[this.randomQuizCount].ansImg;
  }
}
