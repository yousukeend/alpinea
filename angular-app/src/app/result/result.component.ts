import { Component } from '@angular/core';
import { JudgementService } from '../judgement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  constructor(public judgement: JudgementService, private router: Router) {}

  restart() {
    this.judgement.initQuiz();
    this.router.navigateByUrl('/');
  }
}
