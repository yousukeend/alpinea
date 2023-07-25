import { Component, OnInit } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JudgementService } from '../judgement.service';
import * as _ from 'lodash';
import { Quiz } from '../types';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  quizList = QUIZ_LIST;
  trustUrl: SafeResourceUrl = '';
  judgeAns: boolean = false;
  quizCount?: number;
  randomQuizCount?: number;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    public judgement: JudgementService
  ) {
    this.trustUrl = sanitizer.bypassSecurityTrustResourceUrl(
      // this.judgement.randomQuizList[this.randomQuizCount].quizImg
      this.quizList[5].quizImg
    );
  }

  ngOnInit(): void {
    // this.trustUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.judgement.randomQuizList[this.randomQuizCount].quizImg
    // );
    this.quizCount = this.judgement.quizCount;
    this.randomQuizCount = 0;
    this.judgement.startQuiz();
    this.judgement.randomQuizList;
  }

  onClickAnswer(ans: number) {
    // this.judgement.randomQuizCount += 1;
    console.log('random' + this.randomQuizCount);
    this.judgement.setJudgeAns(ans === 0);
    this.router.navigateByUrl('/judge');
  }
}
