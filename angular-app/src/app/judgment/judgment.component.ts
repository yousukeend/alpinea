import { Component, OnInit } from '@angular/core';
import { JudgementService } from '../judgement.service';

@Component({
  selector: 'app-judgment',
  templateUrl: './judgment.component.html',
  styleUrls: ['./judgment.component.scss'],
})
export class JudgmentComponent implements OnInit {
  constructor(public judgement: JudgementService) {}

  ngOnInit(): void {}
}
