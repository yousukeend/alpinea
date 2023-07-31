import { Injectable } from '@angular/core';
import { QUIZ_LIST } from './const';
import { Quiz } from './types';

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

  startQuiz() {
    this.randomQuizList = _.shuffle(this.quizList).slice(0, 7);
  }

  countUp() {
    this.randomQuizCount += 1;
  }
}
