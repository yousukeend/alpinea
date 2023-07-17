import { Component } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-judgment',
  templateUrl: './judgment.component.html',
  styleUrls: ['./judgment.component.scss'],
})
export class JudgmentComponent {
  quizList = QUIZ_LIST;
  trustUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.trustUrl = sanitizer.bypassSecurityTrustResourceUrl(
      this.quizList[1].ansImg
    );
  }
}
