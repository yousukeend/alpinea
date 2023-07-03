import { Component } from '@angular/core';
import { DATA } from '../dataContent';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {
  data = DATA;
  trustUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){
    this.trustUrl = sanitizer.bypassSecurityTrustResourceUrl(this.data[1].quizImg);
  }
}
