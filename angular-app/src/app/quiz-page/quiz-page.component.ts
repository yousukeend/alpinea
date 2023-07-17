import { Component } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JudgementService } from '../judgement.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent {
  quizList = QUIZ_LIST;
  trustUrl: SafeResourceUrl;
  judgeAns: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private judgement: JudgementService
  ) {
    this.trustUrl = sanitizer.bypassSecurityTrustResourceUrl(
      this.quizList[1].quizImg
    );
  }

  onSelected(ans: string) {
    this.judgement.setJudgeAns(ans === this.quizList[1].ansWord);
    this.router.navigateByUrl('/judge');
  }
}
