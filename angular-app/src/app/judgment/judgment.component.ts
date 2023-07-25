import { Component, OnInit } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JudgementService } from '../judgement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-judgment',
  templateUrl: './judgment.component.html',
  styleUrls: ['./judgment.component.scss'],
})
export class JudgmentComponent implements OnInit {
  quizList = QUIZ_LIST;
  trustUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    public judgement: JudgementService
  ) {
    this.trustUrl = sanitizer.bypassSecurityTrustResourceUrl(
      this.quizList[1].ansImg
    );
  }
  ngOnInit(): void {}

  nextQuiz() {
    this.judgement.nextQuiz();
  }
}
