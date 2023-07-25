import { Injectable } from '@angular/core';
import { Quiz } from './types';
import { QUIZ_LIST } from './const';
import { Router } from '@angular/router';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class JudgementService {
  isCorrectAnswer: boolean = false;

  quizCount: number = 1;
  randomQuizList: Quiz[] = [];
  quizList = QUIZ_LIST;
  randomQuizCount: number = 0;

  constructor(private router: Router) {}

  initQuiz() {
    this.quizCount = 1;
    this.randomQuizList = [];
  }

  setJudgeAns(ans: boolean) {
    this.isCorrectAnswer = ans;
  }

  startQuiz() {
    this.randomQuizList = _.shuffle(this.quizList).slice(0, 7);
  }

  nextQuiz() {
    if (this.quizCount < 7) {
      this.quizCount += 1;
      this.randomQuizCount += 1;
      console.log(this.quizCount);
      this.router.navigateByUrl('/quiz');
    } else {
      this.router.navigateByUrl('/result');
    }
  }
}
