import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JudgementService } from 'src/app/services/judgement.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  quizScore: number = 0;
  userSkillLevel?: string;

  constructor(
    private router: Router,
    private judgementService: JudgementService
  ) {}

  ngOnInit(): void {
    this.quizScore = this.judgementService.quizScore;
    this.classifySkillLevel(this.quizScore);
  }
  //最初からクイズをスタートさせる
  restart() {
    this.router.navigateByUrl('/');
  }

  //正解数によって階級判別をさせる
  classifySkillLevel(score: number): void {
    if (score >= 7) {
      this.userSkillLevel = 'プロ';
    } else if (score >= 5) {
      this.userSkillLevel = '上級者';
    } else if (score >= 3) {
      this.userSkillLevel = '中級者';
    } else {
      this.userSkillLevel = '初心者';
    }
  }
}
