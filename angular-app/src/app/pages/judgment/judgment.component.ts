import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { JudgementService } from '../../services/judgement.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-judgment',
  templateUrl: './judgment.component.html',
  styleUrls: ['./judgment.component.scss'],
})
export class JudgmentComponent implements OnInit {
  trustUrl: SafeResourceUrl = '';
  correctAnswer?: boolean;
  answerWord?: string;
  answerExplanation?: string;

  constructor(
    private sanitizer: DomSanitizer,
    private judgementService: JudgementService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.correctAnswer = this.judgementService.quizCorrectAnswer;
    this.answerWord = this.quizService.answerWord;
    this.answerExplanation = this.quizService.answerExplanation;

    this.trustUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.quizService.answerImage
    );
  }

  nextQuiz() {
    this.quizService.nextQuiz();
  }
}
