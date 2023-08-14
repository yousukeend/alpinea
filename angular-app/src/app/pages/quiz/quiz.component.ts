import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JudgementService } from '../../services/judgement.service';
import { QuizService } from '../../services/quiz.service';
import { AnsOption } from 'src/app/types';

import * as _ from 'lodash';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quizCount?: number;
  currentQuizText?: string;
  trustUrl: SafeResourceUrl = '';
  randomChoice: AnsOption[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private judgementService: JudgementService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizCount = this.quizService.quizCount + 1;
    this.currentQuizText = this.quizService.currentQuizText;

    this.trustUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.quizService.currentQuizImg
    );

    //クイズ出題されたとき、選択肢をランダム処理をさせる
    this.randomChoice = _.shuffle(this.quizService.currentAnsOptions);
  }

  onClickAnswer(isCorrect: boolean) {
    this.judgementService.setJudgeAns(isCorrect);
    this.router.navigateByUrl('/judge');
  }
}
