import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JudgementService {
  isCorrectAnswer: boolean = false;

  constructor() {}

  setJudgeAns(ans: boolean) {
    this.isCorrectAnswer = ans;
  }
}
