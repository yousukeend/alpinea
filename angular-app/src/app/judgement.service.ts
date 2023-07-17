import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JudgementService {
  judgeAns: boolean = false;

  constructor() {}

  setJudgeAns(ans: boolean) {
    this.judgeAns = ans;
  }
}
