import { Component, OnInit } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JudgementService } from '../judgement.service';
import { Quiz } from '../types';
import { QuizService } from '../quiz.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  quizList = QUIZ_LIST;
  trustUrl: SafeResourceUrl = '';
  randomQuizList: string[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    public judgementService: JudgementService,
    public quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizService.startQuiz();
    this.trustUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.quizService.randomQuizList[this.quizService.randomQuizCount].quizImg
    );

    this.randomQuizList = _.shuffle(
      this.quizService.randomQuizList[this.quizService.randomQuizCount]
        .ansOptions
    );
  }

  // onClickAnswer(ans: number) {
  //   this.judgementService.setJudgeAns(ans === 0);
  //   this.router.navigateByUrl('/judge');
  // }
  onClickAnswer(ans: string) {
    this.judgementService.setJudgeAns(
      ans ===
        this.quizService.randomQuizList[this.quizService.randomQuizCount]
          .ansWord
    );
    this.router.navigateByUrl('/judge');
  }
}
