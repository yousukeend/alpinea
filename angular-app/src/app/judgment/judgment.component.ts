
import { Component, OnInit } from '@angular/core';
import { QUIZ_LIST } from '../const';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JudgementService } from '../judgement.service';


@Component({
  selector: 'app-judgment',
  templateUrl: './judgment.component.html',
  styleUrls: ['./judgment.component.scss'],
})

export class JudgmentComponent implements OnInit {
  quizList = QUIZ_LIST;
  trustUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, public judgement: JudgementService) {
    this.trustUrl = sanitizer.bypassSecurityTrustResourceUrl(
      this.quizList[1].ansImg
    );
  }
  ngOnInit(): void {}
}
