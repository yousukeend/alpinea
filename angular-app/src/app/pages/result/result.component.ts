import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JudgementService } from '../../services/judgement.service';

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
    this.userSkillLevel = this.judgementService.userSkillLevel;
  }

  //最初からクイズをスタートさせる
  restart() {
    this.router.navigateByUrl('/');
  }
}
