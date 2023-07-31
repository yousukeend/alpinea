import { Component, OnInit } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JudgementService } from '../judgement.service';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-judgment',
  templateUrl: './judgment.component.html',
  styleUrls: ['./judgment.component.scss'],
})
export class JudgmentComponent implements OnInit {
  quizList = QUIZ_LIST;
  trustUrl: SafeResourceUrl = '';

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    public judgementService: JudgementService,
    public quizService: QuizService
  ) {}
  ngOnInit(): void {
    this.trustUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.quizService.randomQuizList[this.quizService.randomQuizCount].ansImg
    );
  }

  nextQuiz() {
    this.judgementService.nextQuiz();
  }
}
