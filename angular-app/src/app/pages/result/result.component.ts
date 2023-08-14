import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  constructor(private router: Router) {}

  //最初からクイズをスタートさせる
  restart() {
    this.router.navigateByUrl('/');
  }
}
