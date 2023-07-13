import { Component } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {
  quizList = QUIZ_LIST;
  trustUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
  ) {
    this.trustUrl = sanitizer.bypassSecurityTrustResourceUrl(
      this.quizList[1].quizImg
    );
  }
}
